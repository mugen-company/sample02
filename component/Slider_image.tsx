import { shaderMaterial } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

// GLSL シェーダーコード
const fragmentShader = `
    #ifdef GL_ES
    precision mediump float; // 浮動小数点の精度を指定
    #endif

    uniform vec2 u_resolution; // ウィンドウの解像度
    uniform vec2 u_mouse; // マウス位置（未使用）
    uniform float u_time; // 時間（アニメーション用）
    uniform sampler2D u_texture1; // 1つ目のテクスチャ
    uniform sampler2D u_texture2; // 2つ目のテクスチャ
    uniform float u_transition; // 画像間の遷移状態

    // ノイズ生成用の関数群
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    // スムーズノイズ生成関数
    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy)); // グリッド位置
        vec2 x0 = v -   i + dot(i, C.xx); // グリッド内の位置
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); // 隣接グリッドの選択
        vec4 x12 = x0.xyxy + C.xxzz; // 隣接グリッドの位置計算
        x12.xy -= i1; // 隣接グリッドを考慮
        i = mod289(i); // グリッド位置を修正
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)); // パーミュート処理
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0); // マスク
        m = m * m; // マスクを二乗
        m = m * m; // マスクをさらに二乗
        vec3 x = 2.0 * fract(p * C.www) - 1.0; // ノイズの生成
        vec3 h = abs(x) - 0.5; // ハーフの計算
        vec3 ox = floor(x + 0.5); // オフセット
        vec3 a0 = x - ox; // 正規化
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h); // 重み付け
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y; // グラデーション計算
        g.yz = a0.yz * x12.xz + h.yz * x12.yw; // グラデーション計算
        return 130.0 * dot(m, g); // ノイズ値の計算
    }

    void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy; // 正規化座標
        st.x *= u_resolution.x / u_resolution.y; // アスペクト比の調整

        vec4 texture1 = texture2D(u_texture1, st) + vec4(0.2, 0.2, 0.2, 0.0); // 明るさを増加
        vec4 texture2 = texture2D(u_texture2, st) + vec4(0.2, 0.2, 0.2, 0.0); // 明るさを増加

        // ノイズによる画像遷移
        float noise = snoise(st * 3.0 + u_time * 0.1); // ノイズ生成
        float transition = smoothstep(0.0, 1.0, u_transition + noise * 0.5); // スムーズ遷移計算

        vec4 color = mix(texture1, texture2, transition); // テクスチャのブレンド
        gl_FragColor = color; // フラグメントの最終色出力
    }
`;

const vertexShader = `
  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// カスタムシェーダーマテリアルの作成
const ImageShaderMaterial = shaderMaterial(
    {
        u_time: 0,
        u_texture1: null,
        u_texture2: null,
        u_transition: 0,
        u_resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    vertexShader,
    fragmentShader
);

// シェーダーをエクステンド
extend({ ImageShaderMaterial });

interface ImageTransitionProps {
    texture1: THREE.Texture;
    texture2: THREE.Texture;
    transition: number;
}

const ImageTransition: FC<ImageTransitionProps> = ({ texture1, texture2, transition }) => {
    const materialRef = useRef<any>(null);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.u_time = clock.getElapsedTime();
            materialRef.current.u_transition = transition;
            materialRef.current.u_resolution.set(window.innerWidth, window.innerHeight);
        }
    });

    return (
        <mesh>
            <planeGeometry args={[window.innerWidth, window.innerHeight]} />
            <imageShaderMaterial
                ref={materialRef}
                u_texture1={texture1}
                u_texture2={texture2}
                u_transition={transition}
                u_resolution={new THREE.Vector2(window.innerWidth, window.innerHeight)}
            />
        </mesh>
    );
};

const SliderImage: FC = () => {
    const texture1 = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mugen-company/sample01/main/public/images/kv_1.jpg');
    const texture2 = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mugen-company/sample01/main/public/images/kv_3.jpg');
    const [transition, setTransition] = useState<number>(0);

    useEffect(() => {
        const transitionDuration = 3; // 3秒で切り替え
        let startTime: number | null = null;
        let reverse = false; // 遷移の方向を制御するためのフラグ

        const animateTransition = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = (timestamp - startTime) / 5000; // 秒単位
            const easeInOutQuad = (t: number) => (t < 1.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

            const nextTransition = easeInOutQuad(Math.min(elapsed / transitionDuration, 1));

            setTransition(reverse ? 1 - nextTransition : nextTransition); // 逆方向の遷移も含める

            if (nextTransition < 1) {
                requestAnimationFrame(animateTransition);
            } else {
                // 遷移が完了したら次のアニメーションを即座に開始
                reverse = !reverse; // 遷移の方向を反転させる
                setTransition(reverse ? 1 : 0);
                startTime = null; // リセットして次のアニメーションへ
                requestAnimationFrame(animateTransition);
            }
        };

        // 初回のアニメーションを開始
        const timeoutId = setTimeout(() => {
            requestAnimationFrame(animateTransition);
        }, 5000); // 1秒後にアニメーション開始

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 100 }}>
                <ImageTransition texture1={texture1} texture2={texture2} transition={transition} />
            </Canvas>
        </div>
    );
};

export default SliderImage;
