"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[]; // 画像の配列
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // スライドを次の画像に切り替える
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 15秒ごとに画像を切り替える

    return () => clearInterval(interval); // クリーンアップ
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: -19 }} // 初期位置と透明度
        animate={{ opacity: 1, y: 0 }} // アニメーション後の位置と透明度
        exit={{ opacity: 0, y: 0 }} // アニメーション終了時の位置
        transition={{ duration: 2.3 }} // アニメーションの速度
        className="absolute w-full h-full"
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          width={400}
          height={200}
          layout="responsive"
        />
      </motion.div>
    </div>
  );
};

export default ImageSlider;
