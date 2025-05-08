import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import styles from './ListCodeBlock.module.scss';

type Props = {
    props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;
}

export const ListCodeBlock: React.FC<Props> = ({
    props
}) => {
    const { children } = props;
    return (
        <div className={styles.codeBlock}>
            <code {...props}>{children}</code>
        </div>
    );
};
ListCodeBlock.displayName = 'ListCodeBlock';