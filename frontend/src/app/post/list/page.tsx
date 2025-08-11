import PostListPage from '@/components/pages/postList/Page';
import getMarkdownAllPosts from '@/utils/markDown/getMarkdownAllPosts';

export default async function PostList() {
	const { postList } = await getMarkdownAllPosts();

	return <PostListPage postList={postList} />;
}
