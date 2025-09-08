import { Icons, Ui } from '@jeehoon/ui';
import Image from 'next/image';
import styles from './ThirdSection.module.scss';

export default function ThirdSection() {
  return (
    <section className={styles.thirdSection}>
      <div className={styles.thirdWrap}>
        <div className={styles.introduction}>
          <Ui.Reveal threshold={0.1}>
            <p className={styles.webQuestion}>
              <span className={styles.webIcon}><Icons.FaGlobe /></span>
              이 웹은?
            </p>
            <p className={styles.firstIntro}>하나의 baakhan.com으로<br />여러 프로젝트를 자유롭게</p>
            <p className={styles.secondIntro}>각기 다른 프로젝트들을 한 도메인에서 통합해 운영하고 있어요.</p>
          </Ui.Reveal>
        </div>
        <Ui.Reveal threshold={0.4}>
          <div className={styles.thirdSectionDesImg1}>
            <Image
              src='https://d2ut7x8yqv441q.cloudfront.net/baakhan/secon-section-1.webp'
              alt=''
              width={409}
              height={285}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '35px',
              }}
            />
          </div>
        </Ui.Reveal>
      </div>
      <div className={styles.thirdWrap}>
        <Ui.Reveal threshold={0.4}>
          <div className={styles.thirdSectionDesImg2}>
            <Image
              src='https://d2ut7x8yqv441q.cloudfront.net/baakhan/secon-section-2.webp'
              alt=''
              width={409}
              height={285}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '35px',
              }}
            />
          </div>
        </Ui.Reveal>
        <div className={styles.introduction}>
          <Ui.Reveal threshold={0.1}>
            <p className={styles.webQuestion}>
              <span className={styles.webIcon}><Icons.FaLightbulb /></span>
              방법은요?
            </p>
            <p className={styles.firstIntro}>각 앱을 자유롭게 배포해요.</p>
            <p className={styles.secondIntro}>Turborepo 프로젝트를 Vercel에서 분리 배포하여, 각 앱이 개별 라우팅되도록 설정했어요.</p>
          </Ui.Reveal>
        </div>
      </div>
    </section>
  )
}
ThirdSection.displayName = 'ThirdSection';