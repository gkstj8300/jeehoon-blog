import { FiAlertCircle } from "@react-icons/all-files/fi/FiAlertCircle";
import styles from './PointCodeBlock.module.scss';

type Props = {
    content: string;
}

export const PointCodeBlock: React.FC<Props> = ({
    content
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.codeBlock}>
                <FiAlertCircle className={styles.content}/>
            </div>
            {content}
        </div>
    );
};
PointCodeBlock.displayName = 'PointCodeBlock';