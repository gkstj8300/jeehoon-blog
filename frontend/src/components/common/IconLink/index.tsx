import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react';
import styles from './IconLink.module.scss';

export type IconLinkProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'href'
> & {
	href: string | UrlObject;
	newTab?: boolean;
	onClick?: () => void;
};

function IconLink(
	{
		href,
		children,
		newTab,
		className,
		target = newTab ? '_blank' : undefined,
		onClick,
		...props
	}: IconLinkProps,
	ref: Ref<HTMLAnchorElement>
) {
	return (
		<Link
			href={href}
			ref={ref}
			className={classNames(styles.link, className)}
			onClick={href === '' ? onClick : undefined}
			target={target}
			{...props}
		>
			{children}
		</Link>
	);
}

export default forwardRef(IconLink);
