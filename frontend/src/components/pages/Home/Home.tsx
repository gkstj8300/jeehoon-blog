import React from "react";
import styles from './Home.module.scss';
import { Contact } from '@/components/pages/Home/contact';
import { Profile } from '@/components/pages/Home/profile';

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
            <div style={{ gridColumn: 'span 7 / span 7' }}></div>
            <div></div>
        </div>
    );
};

Home.displayName = 'Home';
