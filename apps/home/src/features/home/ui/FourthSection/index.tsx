import { Icons, Ui } from '@jeehoon/ui';
import { url } from '@jeehoon/utils';
import Link from 'next/link';
import styles from './FourthSection.module.scss';
import { mono } from '../../contents/mono';
import { ga } from '@/shared/lib/logs/analytics';

export default function FourthSection() {
  const handleGithubViewClick = () => {
    ga.events.githubView();
  }

  return (
    <section className={styles.fourthSection}>
      <div className={styles.fourthWrap}>
        <Ui.Reveal>
          <p className={styles.webQuestion}>
            <span className={styles.webIcon}><Icons.GoPackage /></span>
            코드는 모노레포로 관리되며 이러한 패키지 구조를 가지고 있어요.
          </p>
        </Ui.Reveal>
        <Ui.Reveal>
          <div className={styles.fourthContent}>
            <div className={styles.packageContent}>
              <p className={styles.firstIntro}>패키지 구조</p>
              <div className={styles.directory}>
                <p className={styles.secondIntro}>apps → (home, blog, resome, lab)</p>
                <p className={styles.secondIntro}>packages → (ui, theme, hook, utils)</p>
              </div>
              <div className={styles.chipContent}>
                <span className={styles.chip}>모노레포: 하나의 저장소에 여러 패키지</span>
                <span className={styles.chipGitHubLink}>
                  <Link
                    href={url.githubRepository}
                    className={styles.link}
                    onClick={() => handleGithubViewClick()}
                  >
                    GitHub
                  </Link>
                  에서 전체 코드 확인하기
                </span>
              </div>
            </div>
            <div className={styles.flow}>
              <div className={styles.flowBox}>
                <div className={styles.flowGrid}>
                  <div className={styles.colSpan1}>
                    <div className={styles.flowTitle}>apps</div>
                    {mono.apps.map((a) => (
                      <div key={a.id} className={styles.flowItem}>
                        {a.title}
                      </div>
                    ))}
                  </div>

                  <div className={styles.colSpan2}>
                    <Icons.FaCodeBranch className={styles.packageIcon} />
                  </div>

                  <div className={styles.colSpan1}>
                    <div className={styles.packagesTitle}>packages</div>
                    {mono.packages.map((p) => (
                      <div key={p.id} className={styles.packagesItem}>
                        {p.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Ui.Reveal>
      </div>
    </section>
  )
}
FourthSection.displayName = 'FourthSection';