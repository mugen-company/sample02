import { motion } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from "react";
import '../component/ThemeToggle';
import ThemeToggle from '../component/ThemeToggle';
import AnimatedLink from './AnimatedLink';
export default function Head() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // スクロールダウン
        setIsVisible(false);
      } else {
        // スクロールアップ
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const headerStyle: CSSProperties = {
    transition: 'transform 1.3s ease-in-out',
    position: 'fixed', // 型キャスト
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  } as React.CSSProperties;

  const headStyleh1: CSSProperties = {
    textAlign: 'center',
    width: '100%',
    fontFamily: 'serif',
  } as React.CSSProperties;

  return (
    <header style={headerStyle}>
      <ul>
        <AnimatedLink href="/">ホーム /</AnimatedLink>
        <AnimatedLink href="/about">リコリス歯科について /</AnimatedLink>
        <AnimatedLink href="/contact">お問合せ /</AnimatedLink>
        <AnimatedLink href="/news">お知らせ</AnimatedLink>
        <ThemeToggle />
      </ul>
      <div className='rco'>
        <motion.p
          initial={{ opacity: 0, x: 40 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          リ
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 42 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          コ
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 44 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          リ
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 46 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          ス
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 48 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          歯
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          科
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 52 }} // 初期状態
          animate={{ opacity: 1, x: 8 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          -
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 54 }} // 初期状態
          animate={{ opacity: 1, x: 10 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          訪
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 56 }} // 初期状態
          animate={{ opacity: 1, x: 10 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          問
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 58 }} // 初期状態
          animate={{ opacity: 1, x: 10 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          歯
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 60 }} // 初期状態
          animate={{ opacity: 1, x: 10 }} // アニメーション終了後の状態
          transition={{ duration: 1.9 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
        >
          科
        </motion.p>
      </div>
    </header>
  );
}
