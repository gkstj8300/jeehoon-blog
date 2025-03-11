import { GetServerSideProps, NextPage } from 'next';
import dynamic from "next/dynamic";
import { PostType } from "@/models/pages/slug";
import styles from '@/styles/home.module.scss';
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

type Props = {
    postList: PostType[];
}

const Home = dynamic(
	() => import('@/components/pages/Home').then(module => module.Home),
	{ ssr: true }
);

const HomePage: NextPage<Props> = props => {
    return (
        <Home className={styles.home} {...props}/>
    );
}
HomePage.displayName = 'HomePage';

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const { postList } = await getMarkdownAllPosts();

    return {
        props: {
            postList: Array.isArray(postList) ? postList : [],
        },
    };
};

export default HomePage;
