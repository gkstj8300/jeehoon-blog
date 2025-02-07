import dynamic from "next/dynamic";
import { GetServerSideProps, NextPage } from 'next';
import styles from '@/styles/home.module.scss';
import { PostType } from "./posts/[slug].types";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

type Props = {
    postList: PostType[];
}

// eslint-disable-next-line @typescript-eslint/ban-types
const Layout = dynamic<{}>(
	() => import('@/components/layout/Layout').then(({ Layout }) => Layout),
	{ ssr: false }
);

const Home = dynamic(
	() => import('@/components/pages/Home').then(module => module.Home),
	{ ssr: false }
);

const HomePage: NextPage<Props> = props => {
    return (
        <Layout>
            <Home className={styles.home} {...props}/>
        </Layout>
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
