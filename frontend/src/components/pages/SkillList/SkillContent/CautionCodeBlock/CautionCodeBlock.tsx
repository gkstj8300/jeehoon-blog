import { FiAlertTriangle } from "react-icons/fi";
import styles from './CautionCodeBlock.module.scss';

type Props = {
    content: string;
}

export const CautionCodeBlock: React.FC<Props> = ({
    content
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.codeBlock}>
                <FiAlertTriangle className={styles.content}/>
            </div>
            {content}
        </div>
    );
};
CautionCodeBlock.displayName = 'CautionCodeBlock';