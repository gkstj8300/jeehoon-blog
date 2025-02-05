import React from "react";
import styles from './Home.module.scss';
import { Profile } from '@/components/pages/Profile';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
            <Profile />
        </div>
    );
};

Home.displayName = 'Home';
