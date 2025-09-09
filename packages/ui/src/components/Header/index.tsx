import Link from 'next/link';
import { HEADER_MENU } from './headerMenu';
import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';
import SideBar from './SideBar';

export const HEADER_WRAPPER_ID = 'header-wrapper';

interface HeaderProps {
  domain: string;
}

export default function Header({ domain }: HeaderProps) {
  const homeLink = HEADER_MENU.find(v => v.title === domain)?.link ?? '/';

  return (
    <header className={styles.header} id={HEADER_WRAPPER_ID}>
      <div className={styles.inner}>
        <span className={styles.title}>
          <h1>
            <Link
              href={homeLink}
              aria-label="Go to home">
              @ BaakHan
            </Link>
          </h1>
        </span>
        <nav className={styles.menu} aria-label="Primary">
          <ThemeToggle />
          <SideBar domain={domain} />
          <div className={styles.menuList}>
            {HEADER_MENU.map(({ link, title }) =>
              <Link
                key={title}
                href={link}
                className={styles.link}
                data-domain={title === domain}
                title={title}
              >
                {title}
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
