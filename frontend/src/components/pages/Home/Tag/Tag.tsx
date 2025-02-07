import { IoIosArrowBack } from "react-icons/io";
import styles from './Tag.module.scss';
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';

export const Tag: React.FC = () => {

    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Tag List'/>
            <div className={styles.link}>
                <IoIosArrowBack className={styles.icon}/>
                <TagLink
                    href='#'
                    name='Nextjs'
                />
            </div>
        </div>
    );
};

Tag.displayName = 'Tag';