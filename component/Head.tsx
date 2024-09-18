import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import React, { CSSProperties } from "react";
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

  const headerStyle:CSSProperties  = {
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed', // 型キャスト
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  } as React.CSSProperties;

  const headStyleh1:CSSProperties  = {
    textAlign :'center',
    width:'100%',
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
    
    <motion.h1 style={headStyleh1} 
        initial={{ opacity: 0, y: -15 }} // 初期位置と透明度
        animate={{ opacity: 1, y: 0 }} // アニメーション後の位置と透明度
        exit={{ opacity: 0, y: 15 }} // アニメーション終了時の位置
        transition={{ duration: 1.6 }} // アニメーションの速度
        className="absolute w-full h-full"
    >リコリス歯科 / 訪問歯科</motion.h1>

    </header>
  );
}
