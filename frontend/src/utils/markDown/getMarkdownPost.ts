import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import convertToSlug from './convertToSlug';
import { PostType } from '@/pages/posts/[slug].types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

/* eslint-disable no-restricted-syntax */
const getMarkdownPost = async (slug: string): Promise<PostType> => {
    const fileNames = await fs.readdir(postsDirectory);

    const post = await Promise.all(
        fileNames.map(async (fileName) => {
            const filePath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data, content } = matter(fileContents);

            const convertSlug = convertToSlug(data.title);

            const post: PostType = {
                title: data.title,
                description: data.description,
                thumbnailImage: data.thumbnailImage,
                mainTag: data.mainTag,
                regDate: data.regDate,
                tags: data.tags,
                content,
            };

            if(convertSlug === slug) {
                return post;
            }
        })
    ).then((posts) => posts.find((post) => post));

    if (!post) {
        throw new Error('게시글을 찾지 못했습니다.')
    }

    return post;
};

export default getMarkdownPost;
