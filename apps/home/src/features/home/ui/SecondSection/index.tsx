import Image from 'next/image';
import styles from './SecondSection.module.scss';
import chat from '@/features/home/assets/chat.svg';

export default function SecondSection() {
  return (
    <section className={styles.secondSection}>
      <div className={styles.secondWrap}>
        <Image
          src='https://d2ut7x8yqv441q.cloudfront.net/baakhan/iphone_frame_image.webp'
          alt=''
          width={360}
          height={700}
          style={{
            borderRadius: '35px',
          }}
        />
        <Image
          src={chat}
          alt=''
          width={315}
          height={580}
          style={{
            position: 'absolute',
            top: '-7%',
          }}
        />
      </div>
      <div className={styles.resolution}>
        <p className={styles.firstResol}>더디지만 나아가는</p>
        <p>부족한 부분은 채워 나아가는</p>
      </div>
    </section>
  )
}
SecondSection.displayName = 'SecondSection';