
import { motion } from 'framer-motion'; // framer-motionライブラリからmotionをインポート
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート
import React from 'react'; // Reactをインポート

// AnimatedLinkコンポーネントのプロパティを定義するインターフェース
interface AnimatedLinkProps {
  href: string; // リンクのURL
  children: React.ReactNode; // リンクのテキストや子要素
}

// AnimatedLinkコンポーネントの定義
const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
  return (
    // framer-motionのmotion.liを使って、アニメーション付きのリストアイテムを作成
    <motion.li
      initial={{ opacity: 0, y: -10 }} // 初期状態のアニメーション設定
      animate={{ opacity: 1, y: 0 }} // アニメーション後の状態設定
      transition={{ duration: 1.5,bounceDamping:1.5 }} // アニメーションの持続時間設定
      // whileHover={{ scale: 1.1 }} // ホバー時のスケールアニメーション
    >
      {/* Next.jsのLinkコンポーネントを使ってリンクを作成 */}
      <Link href={href}>{children}</Link>
    </motion.li>
  );
};

// AnimatedLinkコンポーネントをエクスポート
export default AnimatedLink;
