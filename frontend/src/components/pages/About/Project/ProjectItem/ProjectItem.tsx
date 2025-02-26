import { useMemo } from 'react';
import styles from './ProjectItem.module.scss';
import { Skill } from '@/components/pages/About/Project/Skill';

type Props = {
    idx: number,
    name: string,
    projectName: string,
    logoImg: string,
    durationStart: string,
    durationEnd: string,
    skillKeywords: string,
    description: string,
}

export const ProjectItem: React.FC<Props> = ({
    idx,
    name,
    projectName,
    logoImg,
    durationStart,
    durationEnd,
    skillKeywords,
    description,
}) => {

    const isEven = useMemo(() => 
        idx % 2 === 0
    , [idx]);

    const skillList = useMemo(() => 
        skillKeywords.split(',')
    , [skillKeywords]);

    const calculateDuration = useMemo(() => {
        const startDate = new Date(durationStart);
        const endDate = durationEnd === '진행중' ? new Date() : new Date(durationEnd);
    
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
    
        if (months < 0) {
            years--;
            months += 12;
        }

        const yearText = years > 0 ? `${years}년` : '';
        const monthText = months > 0 ? `${months}개월` : '';
        const duration = `${yearText} ${monthText}`.trim();
        return duration;
    }, [durationStart, durationEnd]);

    const descriptionList = useMemo(() => 
        description.split('<br />').map(item => item.trim()
    ), [description]);

    const Item = (
        <div className={styles.projectItem}>
            {isEven && (
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
            )}
            <div 
                className={styles.detailBody}
                data-even={isEven}
            >
                <div>
                    <h3 className={styles.name}>{name}</h3>
                    <h3 className={styles.projectName}>{projectName}</h3>
                    <div className={styles.duration}>
                        <div>
                            {durationStart}
                            <span>~</span>
                            {durationEnd}
                        </div>
                        <span className={styles.calculateDuration}>
                            {calculateDuration}
                        </span>
                    </div>
                </div>
                <ul className={styles.description} data-even={isEven}>
                    {descriptionList.map((description, idx) => 
                        <li key={idx}>{description}</li>    
                    )}
                    {skillList.map(skill => 
                        <Skill key={skill} skill={skill}/>
                    )}
                </ul>
            </div>
            {!isEven && (
                <div className={styles.logoWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.projectLogo} src={logoImg} alt={projectName} />
                </div>
            )}
        </div>
    );

    return Item;
}