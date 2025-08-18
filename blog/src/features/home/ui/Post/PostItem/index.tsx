import Image from 'next/image';
import Link from 'next/link';
import styles from './PostItem.module.scss';
import { PostType } from '@/shared/types/slug';
import { url } from '@/shared/utils/url';

interface PostItemProps {
	post: PostType;
	handlePostClick: (post: PostType) => void;
}

export default function PostItem({ post, handlePostClick }: PostItemProps) {
	const { slug, title, description, thumbnailImage, regDate, mainTag } = post;
	return (
		<Link
			className={styles.container}
			href={url.postDetail(slug)}
			onClick={() => handlePostClick(post)}
		>
			<div className={styles.thumbnail}>
				<div className={styles.thumbnailImg}>
					<Image
						src={thumbnailImage}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, 350px"
						className={styles.img}
						priority
					/>
				</div>
				<div className={styles.mainTag}>{mainTag}</div>
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.regDate}>{regDate}</div>
			<div className={styles.description}>{description}</div>
		</Link>
	);
}
PostItem.displayName = 'PostItem';
