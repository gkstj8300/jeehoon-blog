'use client';

import { Icons } from '@jeehoon/ui';
import { useState } from 'react';
import styles from './SideBar.module.scss';
import { HEADER_MENU } from '../headerMenu';

export default function SideBar() {
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
        <div className={styles.tableOfContents}>
          <ul className={styles.list}>
            {HEADER_MENU.map(({ link, title }) => (
              <li
                key={title}
                className={styles.item}
                onClick={handleSideBarOnClick}
              >
                <span className={styles.menu}>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
SideBar.displayName = 'SideBar';