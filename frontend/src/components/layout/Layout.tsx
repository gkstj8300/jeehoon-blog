import styles from './Layout.module.scss';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ContextProviders } from '@/components/functional/ContextProviders';

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <ErrorBoundary>
            <ContextProviders>
                <div className={styles.layout}>
                    <div className={styles.main}>
                        {children}
                    </div>
                </div>
            </ContextProviders>
        </ErrorBoundary>
    )
}