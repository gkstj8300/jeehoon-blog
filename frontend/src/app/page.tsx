import HomePage from '@/components/pages/home/Page';
import getMarkdownAllPosts from '@/utils/markDown/getMarkdownAllPosts';

export default async function Home() {
	const { postList } = await getMarkdownAllPosts();

	return <HomePage postList={postList} />;
}
