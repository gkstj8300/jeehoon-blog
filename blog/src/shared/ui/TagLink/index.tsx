import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react';
import styles from './TagLink.module.scss';

export type TagLinkProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'href'
> & {
	href: string | UrlObject;
	newTab?: boolean;
	name: string;
	tagCounts?: Record<string, number>;
};

function TagLink(
	{
		href,
		newTab,
		name,
		tagCounts,
		className,
		target = newTab ? '_blank' : undefined,
		...props
	}: TagLinkProps,
	ref: Ref<HTMLAnchorElement>
) {
	return (
		<Link
			href={href}
			ref={ref}
			className={classNames(styles.link, className)}
			{...props}
			onClick={e => e.preventDefault()}
			target={target}
		>
			<>
				{name}
				{tagCounts && <div>({tagCounts[name]})</div>}
			</>
		</Link>
	);
}

export default forwardRef(TagLink);
