'use client';

import { Icons } from '@jeehoon/ui';
import Link from 'next/link';
import styles from './Header.module.scss';
import { url } from '@jeehoon/utils';

export const HEADER_WRAPPER_ID = 'header-wrapper';

export default function Header() {
	return (
		<>
			<header
				className={styles.header}
				id={HEADER_WRAPPER_ID}
			>
				<div className={styles.inner}>
					<span className={styles.title}>
						<h1>@BaakHan</h1>
					</span>
					<div className={styles.menu}>
						<Link
							href={'/about'}
							className={styles.link}
							title='소개'
						>
							소개
						</Link>
						<Link
							href={url.github}
							className={styles.link}
							title='깃허브'
						>
							<Icons.FaGithub
								className={styles.theme}
							/>
						</Link>
						<Link
							href={url.portfolio}
							className={styles.link}
							title='포트폴리오'
						>
							<Icons.RiFileList3Line className={styles.theme} />
						</Link>
						<Link
							href={url.careerDescription}
							className={styles.link}
							title='경력기술서'
						>
							<Icons.FaRegUserCircle
								className={styles.theme}
							/>
						</Link>
						<Icons.FaSun
							className={styles.theme}
							title='LihgtMode'
						/>
					</div>
				</div>
			</header>
		</>
	);
}
