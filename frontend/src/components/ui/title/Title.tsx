import React from 'react';
import styles from './Title.module.scss';

type props = {
    title: string;
}

export const Title: React.FC<props> = ({
    title,
}) => {
    return (
        <div className={styles.container}>
            {title}
        </div>
    );
};
Title.displayName = 'Title';