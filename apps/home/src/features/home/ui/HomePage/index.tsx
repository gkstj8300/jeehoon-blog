import { Icons } from '@jeehoon/ui';
import styles from './HomePage.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {

  return (
    <main>
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
          <Link href={''}>이력</Link>
        </div>
        <h2 className={styles.developer}>FRONT-END 개발자</h2>
      </section>

      <section className={styles.secondSection}>
        <div className={styles.secondWrap}>
          <div className={styles.introduction}>
            <p className={styles.webQuestion}>
              <span className={styles.webIcon}><Icons.FaGlobe /></span>
              이 웹은?
            </p>
            <p className={styles.firstIntro}>하나의 baakhan.com으로 여러 프로젝트를 자유롭게</p>
            <p className={styles.secondIntro}>각기 다른 기술로 만든 프로젝트도 이제 한 도메인에서 통합해 즐길 수 있습니다.</p>
          </div>
          <div className={styles.test}>
            <Image 
              src='https://d2ut7x8yqv441q.cloudfront.net/baakhan/secon-section-1.webp'
              alt=''
              width={409}
              height={285}
              style={{ 
                padding: '10px'
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
HomePage.displayName = 'HomePage';