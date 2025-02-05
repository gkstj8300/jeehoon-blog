import styles from './Layout.module.scss';
import { ContextProviders } from '@/components/functional/ContextProviders';

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <ContextProviders>
            <div className={styles.layout}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </ContextProviders>
    )
}