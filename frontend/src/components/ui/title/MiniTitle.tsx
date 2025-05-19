import styles from './MiniTitle.module.scss';

export type DevelopType = 'Feature' | 'Fix' | 'Style' | 'Test' | 'Stabilize';

type Props = {
    type: DevelopType;
}

export const MiniTitle: React.FC<Props> = ({ type }) => {
    return (
        <div className={styles.miniTitle} data-developType={type}>{type}</div>
    );
};
MiniTitle.displayName = 'MiniTitle';