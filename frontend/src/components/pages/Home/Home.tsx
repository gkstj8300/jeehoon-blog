import { useHome } from './Home.hooks';
import styles from './Home.module.scss';
import { Contact } from '@/components/pages/Home/Contact';
import { Post } from '@/components/pages/Home/Post';
import { Profile } from '@/components/pages/Home/Profile';
import { SearchBox } from "@/components/pages/Home/SearchBox";
import { Tag } from "@/components/pages/Home/Tag";
import { PostType } from "@/models/pages/slug";


type Props = {
    postList: PostType[];
    className?: string;
}

export const Home: React.FC<Props> = ({
    postList
}) => {
    const { 
        posts,
        search,
        handleFindPosts 
    } = useHome(postList);

    return (
        <div className={styles.home}>
            <div className={styles.lcontainer}>
                <Profile />
                <Contact />
            </div>
            <div className={styles.mainContainer}>
                <SearchBox 
                    handleFindPosts={handleFindPosts}
                />
                <Post
                    postList={posts}
                    search={search}
                    handleFindPosts={handleFindPosts}
                />
            </div>
            <div className={styles.rcontainer}>
                <Tag 
                    postList={postList}
                    search={search}
                    handleFindPosts={handleFindPosts}
                />
            </div>
        </div>
    );
};

Home.displayName = 'Home';
