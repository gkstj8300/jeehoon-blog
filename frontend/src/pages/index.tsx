import dynamic from "next/dynamic";
import { None } from '@/layouts/none';
import styles from '@/styles/home.module.scss';
import { NextPageWithLayout } from "@/utils/types";

// eslint-disable-next-line @typescript-eslint/ban-types
const Layout = dynamic<{}>(
	() => import('@/components/layout/Layout').then(({ Layout }) => Layout),
	{ ssr: false }
);

const Home = dynamic(
	() => import('@/components/pages/Home').then(module => module.Home),
	{ ssr: false }
);

const HomePage: NextPageWithLayout = () => {
    return (
        <Layout>
            <Home className={styles.home}/>
        </Layout>
    );
}
HomePage.displayName = 'HomePage';
HomePage.getLayout = None;

export default HomePage;
