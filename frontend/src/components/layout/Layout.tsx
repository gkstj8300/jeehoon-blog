import styles from './Layout.module.scss';
import { Footer } from './footer';
import { Header } from './header';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ContextProviders } from '@/components/functional/ContextProviders';

export const Layout: React.FC = ({ children }) => {

    return (
        <ErrorBoundary>
            <ContextProviders>
                <Header />
                <div className={styles.layout}>
                    <div className={styles.main}>
                        {children}
                    </div>
                </div>
                <Footer />
            </ContextProviders>
        </ErrorBoundary>
    );
};
Layout.displayName = 'Layout';