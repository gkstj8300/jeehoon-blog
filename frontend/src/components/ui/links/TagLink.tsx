import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, FC } from 'react';
import styles from './TagLink.module.scss';

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	href: string | UrlObject;
	newTab?: boolean;
    name: string;
	tagCounts?: Record<string, number>;
};

export const TagLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			href,
			newTab,
            name,
			tagCounts,
			className,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			target = newTab ? `_blank` : undefined,
			...props
		},
		ref
	) => {
		return (
            <Link
                href={href}
				ref={ref}
                className={classNames(styles.link, className)}
                {...props}
				onClick={(e) => e.preventDefault()}
            >
				<>
				{name}
				{tagCounts && (
					<div>({tagCounts[name]})</div>
				)}
				</>
            </Link>
        )
	}
);

TagLink.displayName = 'IconLink';