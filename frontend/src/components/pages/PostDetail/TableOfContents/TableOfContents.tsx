import classNames from 'classnames';
import { useState, useEffect, useCallback, RefObject } from 'react';
import styles from './TableOfContents.module.scss';
import { Heading } from '@/components/pages/PostDetail/PostDetail.types';
import { useScrollTo } from '@/hooks/useScrollTo';
import { sleep } from '@/utils/timer/timer';

type Props = {
    headings: Heading[];
    tableListRef: RefObject<HTMLDivElement>;
}

export const TableOfContents: React.FC<Props> = ({ 
    headings, 
    tableListRef,
}) => {

    const [activeId, setActiveId] = useState<string>(headings[0]?.id || '');

    const { scrollTo } = useScrollTo(tableListRef);

    const getOffset = useCallback((target: HTMLHeadingElement) => {
        if(!tableListRef.current) {
            throw new Error('target is null')
        }

		const headingElementMargin = 82;

		return (
			target.offsetTop - headingElementMargin
		);
	}, [tableListRef]);

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

    useEffect(() => {
		if (tableListRef.current) {
            setTimeout(() => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveId(entry.target.id);
                            }
                        });
                    },
                    {
                        rootMargin: "0px",
                        threshold: 0.85,
                    }
                );
        
                headings.forEach(({ id }) => {
                    const element = document.getElementById(id);
                    if (element) {
                        observer.observe(element);
                    }
                });
        
                return () => observer.disconnect();
            }, 500);
		}
	}, [tableListRef, headings]);

    return (
        <div className={styles.tableOfContents}>
            <h3 className={styles.heading}>목차</h3>
            <ul className={styles.list}>
                {headings.map(({ level, text, id }, index) => (
                    <li 
                        className={classNames(styles.item, level > 2 && styles.childItem)} 
                        key={index} 
                        style={{ 
                            paddingLeft: `${(level - 1) * 10}px` 
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
};
TableOfContents.displayName = 'TableOfContents';