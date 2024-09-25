import { motion } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from "react";
import '../component/ThemeToggle';
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
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  } as React.CSSProperties;

  return (
    <header style={headerStyle}>
      <ul>
        <AnimatedLink href="/">ホーム /</AnimatedLink>
        <AnimatedLink href="/about">リコリス歯科について /</AnimatedLink>
        <AnimatedLink href="/contact">お問合せ /</AnimatedLink>
        <AnimatedLink href="/news">お知らせ</AnimatedLink>
        {/* <ThemeToggle /> */}
      </ul>
      <div className='rco'>
        {['リ', 'コ', 'リ', 'ス', '歯', '科', '-', '訪', '問', '歯', '科'].map((char, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 40 + index * 2 }} // 初期状態
            animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.1 }} // ホバー時に少し拡大
          >
            {char}
          </motion.p>
        ))}
      </div>
    </header>
  );
}
