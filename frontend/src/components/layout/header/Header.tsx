import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useCallback, useMemo } from 'react';
import { CiLight } from "react-icons/ci";
import { FaGithub, FaRegUserCircle } from 'react-icons/fa';
import { MdDarkMode } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { ScrollProgressBar } from '@/components/ui/progressBar';
import { useOnMounted } from '@/hooks/useOnMounted';
import { useStore, useSelector } from '@/store/hooks';
import { loadLayoutTheme, toggleUpdateLayoutTheme } from '@/store/modules/common/operations';
import { selectTheme } from '@/store/modules/common/selectors';
import { url } from '@/utils/url';

export const HEADER_WRAPPER_ID = 'header-wrapper';

export const Header: React.FC = () => {
    const router = useRouter();
    const store = useStore();
    const dispatch = useDispatch();
    const { data: session, status } = useSession();

    const pathIsMain = router.pathname === '/';

    const theme = useSelector(selectTheme);

    const isAuthenticate = useMemo(
        () => !!(session?.user?.email === process.env.NEXT_PUBLIC_GITHUB_ACCESS_EMAIL && status === "authenticated"),
        [session, status]
    );

    const handleTogleChangeClick = useCallback(
        async (event: React.MouseEvent) => {
            event.preventDefault();
            toggleUpdateLayoutTheme(store)(theme);
        },
        [store, theme]
    );

    const load = useCallback(() => {
        loadLayoutTheme(dispatch);
    }, [dispatch]);

    useOnMounted(load);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <header className={styles.header} data-theme={theme} id={HEADER_WRAPPER_ID}>
                <div className={styles.inner}>
                    <span className={styles.title}>
                        {pathIsMain ? (
                            <h1>@BaakHan</h1>
                        ) : (
                            <Link href='/'>@BaakHan</Link>
                        )}
                    </span>
                    <div className={styles.menu}>
                        <Link href={'/about'} className={styles.link}>
                            소개
                        </Link>
                        <Link href={url.github} className={styles.link}>
                            <FaGithub className={styles.theme} />
                        </Link>
                        <Link href={url.portfolio} className={styles.link}>
                            <FaRegUserCircle className={styles.theme} />
                        </Link>
                        {theme === 'dark' 
                        ? (
                            <MdDarkMode className={styles.theme} onClick={handleTogleChangeClick}/>
                        ) : (
                            <CiLight className={styles.theme} onClick={handleTogleChangeClick} />
                        )}
                        {isAuthenticate && (
                            <>
                                <Link href={'/write'} className={styles.link}>
                                    <TfiWrite className={styles.theme}/>
                                </Link>
                                <RiLogoutCircleLine className={styles.theme} onClick={() => signOut({ callbackUrl: "/"})}/>
                            </>
                        )}
                    </div>
                </div>
            </header>
            {!pathIsMain && <ScrollProgressBar />}
        </>
    )
}