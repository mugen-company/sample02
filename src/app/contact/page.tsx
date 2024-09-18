'use client';

import { motion } from 'framer-motion';
import '../../../component/Fotter';
import Fotter from '../../../component/Fotter';
import Head from '../../../component/Head';

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Head />
                  {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
                  <motion.h2
            initial={{ opacity: 0, x: -40 }} // 初期状態
            animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
            transition={{ duration: 1.7 }} // アニメーションの持続時間
            whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
          >
            コンタクト
          </motion.h2>
      <Fotter />
      </main>
    </div>
  );
}
