'use client';

import { Icons } from '@jeehoon/ui';
import Link from 'next/link';
import { useState } from 'react';
import styles from './SideBar.module.scss';
import { HEADER_MENU } from '../headerMenu';

interface SideBarProps {
  domain: string;
}

export default function SideBar({ domain }: SideBarProps) {
  const [active, setActive] = useState(false);

  const handleSideBarOnClick = () => {
    setActive(prev => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={styles.asideButton} onClick={handleSideBarOnClick}>
        <Icons.RiMenu4Fill className={styles.sideMenuIcon} />
      </div>

      {active && (
        <div className={styles.sideBarMenu}>
          <div className={styles.overLay}></div>
          <div className={styles.tableOfContents}>
            <div className={styles.closeWrap}>
              <Icons.FaTimes
                className={styles.closeIcon}
                onClick={handleSideBarOnClick}
              />
            </div>
            <ul className={styles.list}>
              {HEADER_MENU.map(({ link, title }) => (
                <li
                  key={title}
                  className={styles.item}
                  data-domain={title === domain}
                  onClick={handleSideBarOnClick}
                >
                  <Link
                    className={styles.menu}
                    href={link}
                    title={title}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
SideBar.displayName = 'SideBar';