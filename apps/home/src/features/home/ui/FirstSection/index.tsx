import Link from 'next/link';
import styles from './FirstSection.module.scss';

export default function FirstSection() {
  return (
    <section className={styles.firstSection}>
      <div className={styles.firstWrap}>
        <h1 className={styles.profile}>
          <ruby className={styles.name}>
            박지훈
            <rp>(</rp>
            <rt className={styles.nickName}>BaakHan</rt>
            <rp>)</rp>
          </ruby>
        </h1>
        <Link className={styles.resumeBtn} href={''}>이력</Link>
      </div>
      <h2 className={styles.developer}>FRONT-END 개발자</h2>
    </section>
  )
}
FirstSection.displayName = 'FirstSection';