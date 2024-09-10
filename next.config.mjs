/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: 'https://github.com/mugen-company/sample01.git', // リポジトリ名
    assetPrefix: 'https://github.com/mugen-company/sample01.git', // リポジトリ名
    trailingSlash: true, // URL の末尾にスラッシュを追加
    output: "export",
};

export default nextConfig;
