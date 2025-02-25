import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PostTItle.module.scss';
import { Sort } from '@/components/pages/Home/Home.types';

type props = {
    title: string;
    className?: string;
    sort: Sort;
    handleClickSort: (sort: Sort) => void;
}

export const PostTItle: React.FC<props> = ({
    title,
    className,
    sort,
    handleClickSort,
}) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(className, styles.container)}>
            {title}
            <div className={styles.sort}>
                <span
                    data-sort={sort === 'desc'}
                    onClick={() => handleClickSort('desc')}
                >
                    {t('component.pages.post.newest')}
                </span>
                <span 
                    data-sort={sort === 'asc'}
                    onClick={() => handleClickSort('asc')}
                >
                    {t('component.pages.post.oldest')}
                </span>
            </div>
        </div>
    );
};
PostTItle.displayName = 'PostTItle';