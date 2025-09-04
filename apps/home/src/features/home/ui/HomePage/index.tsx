import styles from './HomePage.module.scss';
import FirstSection from '../FirstSection';
import FourthSection from '../FourthSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';

export default function HomePage() {
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