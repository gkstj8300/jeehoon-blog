import classNames from 'classnames';
import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
	title: string;
	className?: string;
}

export default function Title({ title, className }: TitleProps) {
	return <div className={classNames(className, styles.container)}>{title}</div>;
}

Title.displayName = 'Title';
