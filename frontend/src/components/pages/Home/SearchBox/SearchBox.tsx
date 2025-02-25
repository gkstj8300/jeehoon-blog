import { ChangeEvent, useState, useEffect } from 'react';
import styles from './SearchBox.module.scss';
import { SearchType } from "@/components/pages/Home/Home.types";
import { Title } from '@/components/ui/title';

type Props = {
    handleFindPosts: (search: SearchType) => void;
}

export const SearchBox: React.FC<Props> = ({
    handleFindPosts,
}) => {
    const [keyDownValue, setKeyDownValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setKeyDownValue(value);
    };

    useEffect(() => {
        handleFindPosts({ keyword: keyDownValue });
    }, [keyDownValue, handleFindPosts]);

    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Search' />
            <input 
                value={keyDownValue}
                className={styles.searchBox} 
                type="text" 
                placeholder='keyword input'
                onChange={handleChange}
            />
        </div>
    )
}