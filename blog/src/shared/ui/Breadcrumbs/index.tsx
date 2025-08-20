import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useCallback } from 'react';
import styles from './Breadcrumbs.module.scss';

interface Breadcrumb {
	text: string;
	href?: string | UrlObject;
	target?: `_blank` | `_self`;
	strong?: boolean;
}

interface BreadcrumbsProps {
	breadcrumbList: Breadcrumb[];
	displayMode?: 'text' | 'html';
	customTag?: 'h1';
	className?: string;
}

export default function Breadcrumbs({
	breadcrumbList,
	displayMode = 'text',
	customTag,
	className,
}: BreadcrumbsProps) {
	const renderDynamicElement = useCallback(
		(text: string) => {
			const props = {
				...(displayMode === 'text'
					? { children: text }
					: { dangerouslySetInnerHTML: { __html: text } }),
			};

			if (customTag === 'h1') {
				return <h1 className={styles.customTag} {...props} />;
			}

			return <span {...props} />;
		},
		[customTag, displayMode]
	);

	return (
		<ul className={classNames(styles.breadcrumbList, className)}>
			<li className={styles.breadcrumb}>
				<Link href={'/'}>Home</Link>
			</li>
			{breadcrumbList.map((breadcrumb, key) => (
				<li
					className={styles.breadcrumb}
					key={key}
					data-strong={breadcrumb.strong}
				>
					{breadcrumb.href ? (
						<Link
							href={breadcrumb.href}
							{...(displayMode === 'text'
								? { children: breadcrumb.text }
								: {
										dangerouslySetInnerHTML: { __html: breadcrumb.text },
									})}
						/>
					) : (
						renderDynamicElement(breadcrumb.text)
					)}
				</li>
			))}
		</ul>
	);
}
