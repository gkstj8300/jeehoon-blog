import React from "react";
import styles from './Home.module.scss';
import { Contact } from '@/components/pages/Home/Contact';
import { Post } from '@/components/pages/Home/Post';
import { Profile } from '@/components/pages/Home/Profile';
import { SearchBox } from "@/components/pages/Home/SearchBox";
import { Tag } from "@/components/pages/Home/Tag";

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
            <div className={styles.rcontainer}>
                <Tag />
            </div>
        </div>
    );
};

Home.displayName = 'Home';
