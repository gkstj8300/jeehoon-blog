'use client';

import { updateLayoutTheme } from '@jeehoon/utils';
import { useEffect, useState, useCallback } from 'react';
import { Icons } from '../../../icons';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

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

  return theme === 'dark' ? (
    <Icons.FaMoon className={styles.icon} onClick={toggle} />
  ) : (
    <Icons.FaSun className={styles.icon} onClick={toggle} />
  );
}
