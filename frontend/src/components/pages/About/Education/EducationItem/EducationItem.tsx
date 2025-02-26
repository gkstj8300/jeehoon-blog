import { Trans } from 'react-i18next';
import styles from './EducationItem.module.scss';
import type { EducationProps } from '@/components/pages/About/Education/Education';

export const EducationItem: React.FC<EducationProps> = ({
    name,
    major,
    durationStart,
    durationEnd,
}) => {
    return (
        <div className={styles.educationItem}>
            <div className={styles.duration}>
                {durationStart}
                <span>~</span>
                {durationEnd}
            </div>
            <div className={styles.body}>
                <h4 className={styles.name}>
                    {name}
                </h4>
                <p className={styles.major}>
                    <Trans>{major}</Trans>
                </p>
            </div>
        </div>
    )
}