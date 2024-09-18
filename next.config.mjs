/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/sample01.git', // リポジトリ名
    // assetPrefix: '/sample01.git', // リポジトリ名
    // trailingSlash: true, // URL の末尾にスラッシュを追加
    output: "export",
    images: {
        unoptimized: true,  // 画像最適化を無効化
      },
};

export default nextConfig;
