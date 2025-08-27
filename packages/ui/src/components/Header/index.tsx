'use client';

import { Icons } from '../../icons';
import { updateLayoutTheme } from '@jeehoon/utils';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import styles from './Header.module.scss';

export const HEADER_WRAPPER_ID = 'header-wrapper';

type Theme = 'light' | 'dark';

export default function Header() {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (current) setTheme(current);
    else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    updateLayoutTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <header className={styles.header} id={HEADER_WRAPPER_ID}>
      <div className={styles.inner}>
        <span className={styles.title}>
          <h1>
            <Link href="/home" aria-label="Go to home">@ BaakHan</Link>
          </h1>
        </span>

        <nav className={styles.menu} aria-label="Primary">
					{theme === 'dark'
					? (
							<Icons.FaMoon
									className={styles.theme} 
									onClick={toggleTheme}
									title='라이트모드'
							/>
					) : (
							<Icons.FaSun
									className={styles.theme}
									onClick={toggleTheme}
									title='다크모드'
							/>
					)}

          <Link href="/home" className={styles.link} title="Home">Home</Link>
          <Link href="/about" className={styles.link} title="Resume">Resume</Link>
          <Link href="/blog" className={styles.link} title="Blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
