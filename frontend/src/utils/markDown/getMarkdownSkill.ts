import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import convertToSlug from './convertToSlug';
import { SkillType } from '@/types/slug';

const skillsDirectory = path.join(process.cwd(), 'src/skills');

const getMarkdownSkill = async (slug: string): Promise<SkillType> => {
	const fileNames = await fs.readdir(skillsDirectory);

	for (const fileName of fileNames) {
		const filePath = path.join(skillsDirectory, fileName);
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

export default getMarkdownSkill;
