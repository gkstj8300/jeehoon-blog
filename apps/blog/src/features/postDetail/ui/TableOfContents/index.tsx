import classNames from 'classnames';
import { useState, useEffect, useCallback, RefObject, useRef } from 'react';
import styles from './TableOfContents.module.scss';
import { Heading } from '@/features/postDetail/types/PostDetail.types';
import { useScrollTo } from '@/shared/hooks/useScrollTo';
import { sleep } from '@/shared/utils/timer/timer';

interface TableOfContentsProps {
	headings: Heading[];
	tableListRef: RefObject<HTMLDivElement>;
	isAside: boolean;
}

export default function TableOfContents({
	headings,
	tableListRef,
	isAside,
}: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>(headings[0]?.id || '');

	const { scrollTo } = useScrollTo(tableListRef);

	const getOffset = useCallback(
		(target: HTMLHeadingElement) => {
			if (!tableListRef.current) {
				throw new Error('target is null');
			}

			const headingElementMargin = 82;

			return target.offsetTop - headingElementMargin;
		},
		[tableListRef]
	);

	const scrollToGroup = useCallback(
		(id: string) => {
			const headingElement = document.getElementById(id) as HTMLHeadingElement;

			if (headingElement && tableListRef.current) {
				scrollTo(getOffset(headingElement), { behavior: 'smooth' });
			}
		},
		[getOffset, scrollTo, tableListRef]
	);

	const handleClick = useCallback(
		(id: string) => {
			sleep(0).then(() => scrollToGroup(id));
		},
		[scrollToGroup]
	);

	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		setTimeout(() => {
			if (!tableListRef.current) {
				return;
			}

			if (observerRef.current) {
				observerRef.current.disconnect();
			}

			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setActiveId(entry.target.id);
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: 0.85,
				}
			);

			observerRef.current = observer;

			headings.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element) {
					observer.observe(element);
				}
			});

			return () => {
				observer.disconnect();
				observerRef.current = null;
			};
		}, 500);
	}, [tableListRef, headings, isAside]);

	return (
		<div className={styles.tableOfContents} data-aside={isAside}>
			<h3 className={styles.heading}>목차</h3>
			<ul className={styles.list}>
				{headings.map(({ level, text, id }, index) => (
					<li
						className={classNames(styles.item, level > 2 && styles.childItem)}
						key={index}
						style={{
							paddingLeft: `${(level - 1) * 5}px`,
						}}
						onClick={() => handleClick(id)}
						data-active={activeId === id}
					>
						<span className={classNames(level > 2 && styles.text)}>{text}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
TableOfContents.displayName = 'TableOfContents';
