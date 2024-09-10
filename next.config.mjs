/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/sample01.git', // リポジトリ名
    assetPrefix: '/', // リポジトリ名
    trailingSlash: true, // URL の末尾にスラッシュを追加
    output: "export",
};

export default nextConfig;
