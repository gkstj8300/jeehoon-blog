import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { BsPersonBoundingBox } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { useOnMounted } from '@/hooks/useOnMounted';
import { useStore, useSelector } from '@/store/hooks';
import { loadLayoutTheme, toggleUpdateLayoutTheme } from '@/store/modules/common/operations';
import { selectTheme } from '@/store/modules/common/selectors';

export const Header: React.FC = () => {
    const router = useRouter();
    const store = useStore();
    const dispatch = useDispatch();

    const pathIsMain = router.pathname === '/';

    const theme = useSelector(selectTheme);

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
        <header className={styles.header} data-theme={theme}>
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
                        <BsPersonBoundingBox className={styles.theme} />
                    </Link>
                    {theme === 'dark' 
                    ? (
                        <MdDarkMode className={styles.theme} onClick={handleTogleChangeClick}/>
                    ) : (
                        <CiLight className={styles.theme} onClick={handleTogleChangeClick} />
                    )}
                </div>
            </div>
        </header>
    )
}