import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface HoverRevealProps {
  children: React.ReactNode; // 子要素
}

const HoverReveal: React.FC<HoverRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // 可視状態を管理

  const handleScroll = () => {
    const element = document.getElementById('hover-reveal'); // 要素のIDを取得
    if (element) {
      const rect = element.getBoundingClientRect();
      // ビューポートに要素が入ってきたらisVisibleをtrueに
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // スクロールイベントリスナーを追加
    handleScroll(); // 初回のチェック

    return () => {
      window.removeEventListener('scroll', handleScroll); // クリーンアップ
    };
  }, []);

  return (
    <motion.div
      id="hover-reveal" // 要素を識別するためのID
      initial={{ opacity: 0, translateY: 20 }} // 初期状態
      animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }} // ビジュアル状態をアニメーション
      transition={{ duration: 0.5 }} // アニメーションの持続時間
      style={{ overflow: 'hidden', height: isVisible ? 'auto' : '0' }} // はみ出し部分を隠す
    >
      {children} {/* 子要素を表示 */}
    </motion.div>
  );
};

export default HoverReveal;
