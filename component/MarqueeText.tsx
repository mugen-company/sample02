import React from "react";

const MarqueeText: React.FC = () => {
  return (
    <div style={marqueeContainerStyle}>
      <div style={marqueeContentStyle}>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
        <span style={textStyle}>リコリス歯科&nbsp;</span>
      </div>
    </div>
  );
};

// スタイリングオブジェクト
const marqueeContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
  position: 'relative',
  height: '100px', // 高さを調整
  // backgroundColor: '#f5f5f5', // 背景色（オプション）
};

const marqueeContentStyle: React.CSSProperties = {
  display: 'inline-block',
  paddingLeft: '100%', // 画面の右端から開始
  animation: 'marquee 100s linear infinite', // アニメーションの定義
};

const textStyle: React.CSSProperties = {
  fontSize: '8rem', // 文字の大きさ
  fontWeight: 'bold', // 文字を太く
  color: 'rgb(156 156 156)', // 文字の色
  whiteSpace: 'nowrap',
  opacity: '0.09',
};

// グローバルに適用されるCSSを追加
const globalStyle = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
`;

// head にアニメーションの keyframes を追加する
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = globalStyle;
  document.head.appendChild(style);
}

export default MarqueeText;
