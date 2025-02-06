import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, FC } from 'react';
import styles from './TagLink.module.scss';

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	href: string | UrlObject;
	newTab?: boolean;
    name: string;
};

export const TagLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			href,
			newTab,
            name,
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
            >
                {name}
            </Link>
        )
	}
);

TagLink.displayName = 'IconLink';