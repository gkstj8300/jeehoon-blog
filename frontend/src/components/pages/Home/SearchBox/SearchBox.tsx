import { ChangeEvent, useState, useEffect } from 'react';
import styles from './SearchBox.module.scss';
import { Title } from '@/components/ui/title';
import { PostType } from '@/models/pages/slug';

type Props = {
    allPostList: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

export const SearchBox: React.FC<Props> = ({
    allPostList,
    setPosts,
}) => {
    const [keyDownValue, setKeyDownValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setKeyDownValue(value);
    };

    useEffect(() => {
        const findPostList = allPostList.filter(post => post.title.toLowerCase().startsWith(keyDownValue.toLowerCase()));
        setPosts(findPostList);
    }, [keyDownValue, allPostList, setPosts]);

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