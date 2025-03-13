import { useState, useEffect } from "react";
import { useHome } from './Home.hooks';
import styles from './Home.module.scss';
import { Notice } from "@/components/layout/notice";
import { Post } from '@/components/pages/Home/Post';
import { Profile } from '@/components/pages/Home/Profile';
import { RecentPosts } from "@/components/pages/Home/RecentPosts";
import { SearchBox } from "@/components/pages/Home/SearchBox";
import { Tag } from "@/components/pages/Home/Tag";
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { PostType } from "@/models/pages/slug";

const TEG_INNER_WIDTH = 1024;

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
        recentPosts,
        handleFindPosts 
    } = useHome(postList);

    const [innerWidth, setInnerWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Notice />
            <Breadcrumbs breadcrumbList={[]}/>
            <div>
                <div className={styles.home}>
                    <div className={styles.lcontainer}>
                        <Profile />
                    </div>
                    {innerWidth < TEG_INNER_WIDTH && (
                        <div className={styles.rcontainer}>
                            <Tag 
                                postList={postList}
                                search={search}
                                handleFindPosts={handleFindPosts}
                            />
                        </div>
                    )}
                    <div className={styles.mainContainer}>
                        <RecentPosts posts={recentPosts} />
                        <SearchBox 
                            handleFindPosts={handleFindPosts}
                        />
                    </div>
                    {innerWidth >= TEG_INNER_WIDTH && (
                        <div className={styles.rcontainer}>
                            <Tag 
                                postList={postList}
                                search={search}
                                handleFindPosts={handleFindPosts}
                            />
                        </div>
                    )}
                </div>
                <Post postList={posts} />
            </div>
        </>
    );
};

Home.displayName = 'Home';
