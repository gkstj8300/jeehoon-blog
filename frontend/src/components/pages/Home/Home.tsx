import React from "react";
import styles from './Home.module.scss';
import { Contact } from '@/components/pages/Home/Contact';
import { Profile } from '@/components/pages/Home/Profile';
import { Post } from '@/components/pages/Home/Post';
import { SearchBox } from "@/components/pages/Home/SearchBox";

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
            <div className={styles.lcontainer}>
                <Profile />
                <Contact />
            </div>
            <div className={styles.mainContainer}>
                <SearchBox />
                <Post />
            </div>
            <div></div>
        </div>
    );
};

Home.displayName = 'Home';
