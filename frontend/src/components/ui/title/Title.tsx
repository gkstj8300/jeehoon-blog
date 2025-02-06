import classNames from 'classnames';
import React from 'react';
import styles from './Title.module.scss';

type props = {
    title: string;
    className?: string;
}

export const Title: React.FC<props> = ({
    title,
    className,
}) => {
    return (
        <div className={classNames(className, styles.container)}>
            {title}
        </div>
    );
};
Title.displayName = 'Title';