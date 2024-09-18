"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import Footer from "../../component/Fotter";
import Head from "../../component/Head";
import ImageSlider from "../../component/ImageSlider";

export default function Home() {
  const images = ["https://github.com/mugen-company/sample01/blob/main/public/images/kv_1.jpg?raw=true", "/images/kv_3.jpg", "https://github.com/mugen-company/sample01/blob/main/public/images/kv_1.jpg?raw=true"]; // スライドショー用の画像パス

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // クライアントサイドでのみレンダリング
  }, []);

  if (!isClient) {
    return null; // サーバーサイドでは何もレンダリングしない
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Head />
        <ImageSlider images={images} />
        <div className="middle">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Footer />
      </main>
    </div>
  );
}
