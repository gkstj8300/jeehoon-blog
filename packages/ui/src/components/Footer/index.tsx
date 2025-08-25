import styles from './Footer.module.scss';
import { url } from '@jeehoon/utils';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.linkList}>
				<p>
					<span>Email</span>
				</p>
				<a target="_blank" href={url.github}>
					<span>Github</span>
				</a>
				<a target="_blank" href={url.careerDescription}>
					<span>CareerDescription</span>
				</a>
			</div>
			<div>
				<span>Copyright 2025.JeeHoon-Blog Corporation All Rights Reserved.</span>
			</div>
		</footer>
	);
}
Footer.displayName = 'Footer';
