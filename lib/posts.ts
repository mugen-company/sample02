import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// 記事の型を定義
export interface PostData {
    slug: string;
    title: string;
    date: string;
}

// 全ての投稿を取得
export function getSortedPostsData(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // メタデータを解析
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
        };
    });

    // 日付で記事をソート
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
