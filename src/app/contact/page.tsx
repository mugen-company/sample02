"use client";

import { motion } from "framer-motion";
import "../../../component/Fotter";
import Fotter from "../../../component/Fotter";
import Head from "../../../component/Head";
import ImageSlider from "../../../component/ImageSlider";

export default function Contact() {
  const images = [
    "https://github.com/mugen-company/sample01/blob/main/public/images/kv_1.jpg?raw=true",
    "https://github.com/mugen-company/sample01/blob/main/public/images/kv_3.jpg?raw=true",
    "https://github.com/mugen-company/sample01/blob/main/public/images/kv_1.jpg?raw=true",
  ]; // スライドショー用の画像パス

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Head />
        {/* motion.h2 を使って h2 タグにアニメーションを追加 */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }} // 初期状態
          animate={{ opacity: 1, x: 0 }} // アニメーション終了後の状態
          transition={{ duration: 1.7 }} // アニメーションの持続時間
          whileHover={{ scale: 1.05 }} // ホバー時に少し拡大
        >
          リコリス歯科 / お問合せ
        </motion.h2>
      </main>
      <ImageSlider images={images} />
      <Fotter />
    </div>
  );
}
