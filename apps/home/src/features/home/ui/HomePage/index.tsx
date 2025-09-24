"use client";

import { useOnMounted } from '@jeehoon/hooks';
import styles from './HomePage.module.scss';
import FirstSection from '../FirstSection';
import FourthSection from '../FourthSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import { ga } from '@/shared/lib/logs/analytics';

export default function HomePage() {
  useOnMounted(ga.pageView.main);

  return (
    <main className={styles.container}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  )
}
HomePage.displayName = 'HomePage';