import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import convertToSlug from './convertToSlug';
import { PostType } from '@/types/slug';

const postsDirectory = path.join(process.cwd(), 'src/posts');

const getMarkdownPost = async (slug: string): Promise<PostType> => {
	const fileNames = await fs.readdir(postsDirectory);

	for (const fileName of fileNames) {
		const filePath = path.join(postsDirectory, fileName);
		const fileContents = await fs.readFile(filePath, 'utf8');
		const { data, content } = matter(fileContents);

		const convertSlug = convertToSlug(data.title);

		if (convertSlug === slug) {
			return {
				slug: convertSlug,
				title: data.title,
				description: data.description,
				thumbnailImage: data.thumbnailImage,
				mainTag: data.mainTag,
				regDate: data.regDate,
				tags: data.tags,
				content,
			};
		}
	}

	throw new Error('게시글을 찾지 못했습니다.');
};

export default getMarkdownPost;
