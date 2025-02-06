import { UrlObject } from 'url';
import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, FC } from 'react';
import styles from './IconLink.module.scss';

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	href: string | UrlObject;
	newTab?: boolean;
};

export const IconLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			href,
			children,
			newTab,
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
                {children}
            </Link>
        )
	}
);

IconLink.displayName = 'IconLink';