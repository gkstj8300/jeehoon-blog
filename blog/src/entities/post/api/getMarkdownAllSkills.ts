import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import convertToSlug from '../utils/convertToSlug';
import { SkillType } from '@/shared/types/slug';

const skillsDirectory = path.join(process.cwd(), 'src/skills');

const getMarkdownAllSkills = async () => {
	const fileNames = fs.readdirSync(skillsDirectory);

	const skillList = fileNames
		.map(fileName => {
			const fullPath = path.join(skillsDirectory, fileName);
			const contents = fs.readFileSync(fullPath, 'utf8');
			const { data, content } = matter(contents);

			const skill: SkillType = {
				slug: convertToSlug(data.title),
				title: data.title,
				description: data.description,
				thumbnailImage: data.thumbnailImage,
				mainTag: data.mainTag,
				regDate: data.regDate,
				tags: data.tags,
				content,
			};

			return skill;
		})
		.sort(
			(a, b) => new Date(b.regDate).getTime() - new Date(a.regDate).getTime()
		);

	return {
		skillList: skillList,
	};
};

export default getMarkdownAllSkills;
