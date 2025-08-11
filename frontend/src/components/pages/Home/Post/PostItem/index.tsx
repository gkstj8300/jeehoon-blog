import Image from 'next/image';
import Link from 'next/link';
import styles from './PostItem.module.scss';
import { PostType } from '@/types/slug';
import { url } from '@/utils/url';

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
					<picture>
						<source
							className={styles.img}
							srcSet={thumbnailImage}
							type="image/webp"
						/>
						<Image
							className={styles.img}
							src={thumbnailImage.replace('webp', 'png')}
							alt={`${title}`}
							width={350}
							height={180}
							priority
						/>
					</picture>
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
