import classNames from 'classnames';
import styles from './TableOfContents.module.scss';

type Heading = {
    level: number;
    text: string;
    id: string;
}

type Props = {
    headings: Heading[];
}

export const TableOfContents: React.FC<Props> = ({ headings }) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 52,
                behavior: "smooth",
            });
        }
    };

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
                    >
                        <span className={classNames(level > 2 && styles.text)}>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};