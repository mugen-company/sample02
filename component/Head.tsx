import { useEffect, useState } from 'react';
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

  const headerStyle = {
    transition: 'transform 1.0s ease-in-out',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    // backgroundColor: 'white',
    zIndex: 1000,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <header style={headerStyle}>
      <ul>
        <AnimatedLink href="/">リコリス歯科</AnimatedLink>
        <AnimatedLink href="/about">外来</AnimatedLink>
        <AnimatedLink href="/contact">お問合せ</AnimatedLink>
        <AnimatedLink href="/news">お知らせ</AnimatedLink>
      </ul>
    </header>
  );
}
