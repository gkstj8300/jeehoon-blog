import classNames from 'classnames';
import React from 'react';
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
	return (
		<div className={classNames(className, styles.container)}>
			{title}
			<div className={styles.sort}>
				<span
					data-sort={sort === 'desc'}
					onClick={() => handleClickSort('desc')}
				>
					Newest
				</span>
				<span data-sort={sort === 'asc'} onClick={() => handleClickSort('asc')}>
					Oldest
				</span>
			</div>
		</div>
	);
}
PostTItle.displayName = 'PostTItle';
