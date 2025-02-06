import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const router = useRouter();

    const pathIsMain = router.pathname === '/';

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <span className={styles.title}>
                    {pathIsMain ? (
                        <h1>JeeHoon-Blog</h1>
                    ) : (
                        <Link href='/'>JeeHoon-Blog</Link>
                    )}
                </span>
                <div className={styles.menu}>
                    <Link href={''}>Dummy Link</Link>
                </div>
            </div>
        </header>
    )
}