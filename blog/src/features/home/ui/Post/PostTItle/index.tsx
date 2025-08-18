import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PostTItle.module.scss';

type Sort = 'desc' | 'asc';

interface PostTItleprops {
	title: string;
	className?: string;
	sort: Sort;
	handleClickSort: (sort: Sort) => void;
}

export default function PostTItle({
	title,
	className,
	sort,
	handleClickSort,
}: PostTItleprops) {
	const { t } = useTranslation();

	return (
		<div className={classNames(className, styles.container)}>
			{title}
			<div className={styles.sort}>
				<span
					data-sort={sort === 'desc'}
					onClick={() => handleClickSort('desc')}
				>
					{t('component.pages.home.post.newest')}
				</span>
				<span data-sort={sort === 'asc'} onClick={() => handleClickSort('asc')}>
					{t('component.pages.home.post.oldest')}
				</span>
			</div>
		</div>
	);
}
PostTItle.displayName = 'PostTItle';
