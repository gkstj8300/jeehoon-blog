import styles from './Layout.module.scss';
import { Footer } from './footer';
import { Header } from './header';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ContextProviders } from '@/components/functional/ContextProviders';
import { TooltipController } from '@/components/ui/tooltips';

export const Layout: React.FC = ({ children }) => {

    return (
        <ErrorBoundary>
            <ContextProviders>
                <Header />
                <div className={styles.layout}>
                    {children}
                </div>  
                <Footer />
                <TooltipController />
            </ContextProviders>
        </ErrorBoundary>
    );
};
Layout.displayName = 'Layout';