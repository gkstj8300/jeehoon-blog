import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import convertToSlug from './convertToSlug';
import { PostType } from '@/pages/posts/[slug].types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

const getMarkdownPost = async (slug: string): Promise<PostType> => {
    const fileNames = await fs.readdir(postsDirectory);

    const post = await Promise.all(
        fileNames.map(async (fileName) => {
            const filePath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContents);
            return convertToSlug(data.title) === slug
                ? {
                    title: data.title,
                    description: data.description,
                    thumbnailImage: data.thumbnail,
                    regDate: data.date,
                    tag: data.tag,
                } : null;
        })
    ).then((posts) => posts.find((post) => post !== null));

    if (!post) {
        throw new Error('게시글을 찾지 못했습니다.')
    };

    return post;
};

export default getMarkdownPost;
