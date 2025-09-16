'use client';

import { updateLayoutTheme } from '@jeehoon/utils';
import { useEffect, useState, useCallback } from 'react';
import { Icons } from '../../../icons';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const isDark = theme === 'dark';
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (current) {
      setTheme(current);
    } else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      const defaultTheme: Theme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      updateLayoutTheme(defaultTheme);
    }
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    updateLayoutTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <button
      type="button"
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      title="Toggle theme"
    >
      <span className={styles.track} aria-hidden="true" />
      <span
        className={styles.handle}
        data-state={isDark ? 'dark' : 'light'}
        aria-hidden="true"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          focusable="false"
        >
          {isDark ? (
            // moon
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              fill="currentColor"
            />
          ) : (
            // sun
            <path
              d="M12 4a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm0 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 11a1 1 0 011-1H6a1 1 0 110 2H5a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM6.3 6.3a1 1 0 011.4 0l.7.7a1 1 0 11-1.4 1.4l-.7-.7a1 1 0 010-1.4zm10.6 10.6a1 1 0 011.4 0l.7.7a1 1 0 11-1.4 1.4l-.7-.7a1 1 0 010-1.4zM6.3 17.7a1 1 0 000-1.4l.7-.7a1 1 0 011.4 1.4l-.7.7a1 1 0 01-1.4 0zm10.6-10.6a1 1 0 000-1.4l.7-.7a1 1 0 011.4 1.4l-.7.7a1 1 0 01-1.4 0zM12 8a4 4 0 100 8 4 4 0 000-8z"
              fill="currentColor"
            />
          )}
        </svg>
      </span>
    </button>
  )
}
