import React from "react";
import styles from './Home.module.scss';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
        </div>
    );
};

Home.displayName = 'Home';
