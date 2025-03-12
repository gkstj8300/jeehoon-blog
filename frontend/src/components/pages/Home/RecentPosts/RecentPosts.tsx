import { useTranslation } from 'react-i18next';
import styles from './RecentPosts.module.scss';
import { PostType } from "@/models/pages/slug";

type Props = {
    posts: PostType[];
};

export const RecentPosts: React.FC<Props> = ({ posts }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <a href="/s" className={styles.recentPosts}>
                    {t('component.pages.home.recentPosts.recentPost')}
                </a>
                <a href="/s" className={styles.allPostLink}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                        className={styles.icon}
                    >
                        <path
                            d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"
                        ></path>
                    </svg>
                    {t('component.pages.home.recentPosts.allPost')}
                </a>
            </div>
            <div className={styles.body}>
                {posts.map((post) => (
                    <a href="" key={post.title} className={styles.post}>
                        <span className={styles.tag}>{post.mainTag}</span>
                        <div className={styles.title} title={post.title}>
                            {post.title}
                        </div>
                        <div className={styles.place}></div>
                        <div className={styles.date}>
                            <span 
                                title={t('component.pages.home.recentPosts.allPost', {
                                    date: post.regDate
                                })}
                            >{post.regDate}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
RecentPosts.displayName = 'RecentPosts';