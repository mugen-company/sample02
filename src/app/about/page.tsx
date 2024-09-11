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
            initial={{ opacity: 0, x: -40 }} // 初期状態
            animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.7 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            Company
          </motion.h2>

          {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
          <motion.p
            initial={{ opacity: 0, y: 40 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            私
          </motion.p>
          {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            達
          </motion.p>
                    {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
                    <motion.p
            initial={{ opacity: 0, y: 60 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            に
          </motion.p>
                    {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
                    <motion.p
            initial={{ opacity: 0, y: 70 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            つ
          </motion.p>
                    {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
                    <motion.p
            initial={{ opacity: 0, y: 80 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            い
          </motion.p>
                    {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
                    <motion.p
            initial={{ opacity: 0, y: 90 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            て
          </motion.p>
        </div>
        <footer>
          <motion.p
            initial={{ opacity: 0, y: 40 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            @
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            c
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 60 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            o
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 70 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            p
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 80 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            y
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 90 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            r
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            i
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 110 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            g
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 120 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            h
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 130 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.9 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大>
            
          >
            t
          </motion.p>
        </footer>
      </main>
    </div>
  );
}
