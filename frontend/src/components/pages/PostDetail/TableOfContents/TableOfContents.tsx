import classNames from 'classnames';
import { useState, useEffect } from 'react';
import styles from './TableOfContents.module.scss';
import { Heading } from '@/components/pages/PostDetail/PostDetail.types';

type Props = {
    headings: Heading[];
}

export const TableOfContents: React.FC<Props> = ({ headings }) => {

    const [activeId, setActiveId] = useState<string>(headings[0]?.id || '');

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 82,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (!headings) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0px 0px -90% 0px",
                threshold: 0.9,
            }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

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