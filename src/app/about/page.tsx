"use client";

import AnimatedLink from "../../../component/AnimatedLink";
import { motion } from "framer-motion"; // framer-motionライブラリからmotionをインポート

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header>
          <ul>
            <AnimatedLink href="/">Home</AnimatedLink>
            <AnimatedLink href="/contact">Contact</AnimatedLink>
            <AnimatedLink href="/services">Services</AnimatedLink>
          </ul>
        </header>

        <div className="main-contents">
          {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.7 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            Our Business
          </motion.h2>

          {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
          <motion.p
            initial={{ opacity: 0, y: 40 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            リコリス歯科は、。。。
          </motion.p>
        </div>
      </main>
    </div>
  );
}
