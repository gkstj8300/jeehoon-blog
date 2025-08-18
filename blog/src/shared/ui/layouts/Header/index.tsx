'use client';

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaRegUserCircle } from '@react-icons/all-files/fa/FaRegUserCircle';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { GiSkills } from '@react-icons/all-files/gi/GiSkills';
import { RiFileList3Line } from '@react-icons/all-files/ri/RiFileList3Line';
import { RiLogoutCircleLine } from '@react-icons/all-files/ri/RiLogoutCircleLine';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { useOnMounted } from '@/shared/hooks/useOnMounted';
import { ga } from '@/shared/lib/logs/analytics';
import { useStore, useSelector } from '@/shared/lib/store/hooks';
import {
	loadLayoutTheme,
	toggleUpdateLayoutTheme,
} from '@/shared/lib/store/modules/common/operations';
import { selectTheme } from '@/shared/lib/store/modules/common/selectors';
import ScrollProgressBar from '@/shared/ui/ScrollProgressBar';
import { url } from '@/shared/utils/url';

export const HEADER_WRAPPER_ID = 'header-wrapper';

export default function Header() {
	const store = useStore();
	const pathName = usePathname();
	const dispatch = useDispatch();
	const { data: session, status } = useSession();

	const { t } = useTranslation();

	const pathIsMain = pathName === '/';
	const pathIsPostList = pathName === '/postList';

	const theme = useSelector(selectTheme);

	const isAuthenticate = useMemo(
		() =>
			!!(
				(session?.user?.email === process.env.NEXT_PUBLIC_GITHUB_ACCESS_EMAIL ||
					session?.user?.email ===
						process.env.NEXT_PUBLIC_GITHUB_ACCESS_GOOGLE_EMAIL) &&
				status === 'authenticated'
			),
		[session, status]
	);

	const handleTogleChangeClick = useCallback(
		async (event: React.MouseEvent) => {
			event.preventDefault();
			toggleUpdateLayoutTheme(store)(theme);
			ga.events.themeChange(theme);
		},
		[store, theme]
	);

	const handleGithubClick = useCallback(() => {
		ga.events.githubView(pathName);
	}, [pathName]);

	const handleCareerDescriptionClick = useCallback(() => {
		ga.events.careerDescriptionView(pathName);
	}, [pathName]);

	const load = useCallback(() => {
		loadLayoutTheme(dispatch);
	}, [dispatch]);

	useOnMounted(load);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<header
				className={styles.header}
				data-theme={theme}
				id={HEADER_WRAPPER_ID}
			>
				<div className={styles.inner}>
					<span className={styles.title}>
						{pathIsMain ? (
							<h1>{t('component.ui.layouts.header.baakhan')}</h1>
						) : (
							<Link href="/">{t('component.ui.layouts.header.baakhan')}</Link>
						)}
					</span>
					<div className={styles.menu}>
						<Link
							href={'/about'}
							className={styles.link}
							title={t('component.ui.layouts.header.about')}
						>
							{t('component.ui.layouts.header.about')}
						</Link>
						<Link
							href={url.github}
							className={styles.link}
							title={t('component.ui.layouts.header.github')}
						>
							<FaGithub
								className={styles.theme}
								onClick={() => handleGithubClick()}
							/>
						</Link>
						<Link
							href={url.portfolio}
							className={styles.link}
							title={t('component.ui.layouts.header.portfolio')}
						>
							<RiFileList3Line className={styles.theme} />
						</Link>
						<Link
							href={url.careerDescription}
							className={styles.link}
							title={t('component.ui.layouts.header.careerDescription')}
						>
							<FaRegUserCircle
								className={styles.theme}
								onClick={() => handleCareerDescriptionClick()}
							/>
						</Link>
						{theme === 'dark' ? (
							<FaSun
								className={styles.theme}
								onClick={handleTogleChangeClick}
								title={t('component.ui.layouts.header.lihgt')}
							/>
						) : (
							<FaMoon
								className={styles.theme}
								onClick={handleTogleChangeClick}
								title={t('component.ui.layouts.header.dark')}
							/>
						)}
						{isAuthenticate && (
							<>
								<Link
									href={'/write'}
									className={styles.link}
									title={t('component.ui.layouts.header.write')}
								>
									<FaPen className={styles.theme} />
								</Link>
								<RiLogoutCircleLine
									className={styles.theme}
									onClick={() => signOut({ callbackUrl: '/' })}
								/>
								<Link
									href={'/skillList'}
									className={styles.link}
									title={t('component.ui.layouts.header.skill')}
								>
									<GiSkills className={styles.theme} />
								</Link>
							</>
						)}
					</div>
				</div>
			</header>
			{!pathIsMain && !pathIsPostList && <ScrollProgressBar />}
		</>
	);
}
