import { IoIosArrowBack } from "react-icons/io";
import styles from './Tag.module.scss';
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';

export const Tag: React.FC = () => {

    return (
        <div className={styles.container}>
            <Title title='Tag List'/>
            <div className={styles.link}>
                <IoIosArrowBack />
                <TagLink
                    href='#'
                    name='Nextjs'
                />
            </div>
        </div>
    );
};

Tag.displayName = 'Tag';