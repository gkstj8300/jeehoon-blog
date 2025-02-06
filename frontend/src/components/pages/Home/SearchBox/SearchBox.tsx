import styles from './SearchBox.module.scss';
import { Title } from '@/components/ui/title';

export const SearchBox: React.FC = () => {

    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Search' />
            <input className={styles.searchBox} type="text" placeholder='keyword input'/>
        </div>
    )
}