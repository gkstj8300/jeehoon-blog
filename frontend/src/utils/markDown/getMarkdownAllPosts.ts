import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostType } from '@/pages/posts/[slug].types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

const getMarkdownAllPosts = async () => {
    const fileNames = fs.readdirSync(postsDirectory);

    const postList = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const contents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(contents);

        const post: PostType = {
            title: data.title,
            description: data.description,
            thumbnailImage: data.thumbnailImage,
            mainTag: data.mainTag,
            regDate: data.regDate,
            tags: data.tags,
            content,
        };

        return post;
    }).sort(
        (a, b) => new Date(b.regDate).getTime() - new Date(a.regDate).getTime(),
    );

    return {
        postList: postList,
    };
};

export default getMarkdownAllPosts;