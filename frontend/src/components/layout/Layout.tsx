import { ReactNode, useRef } from 'react';
import styles from './Layout.module.scss';
import { Footer } from './footer';
import { BackToTop } from './footer/BackToTop';
import { Header } from './header';
import { Notice } from './notice';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ContextProviders } from '@/components/functional/ContextProviders';
import { TooltipController } from '@/components/ui/tooltips';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <ErrorBoundary>
            <ContextProviders>
                <div className={styles.container} ref={rootRef}>
                    <Header />
                    <Notice />
                    <div className={styles.layout}>
                        {children}
                        <div className={styles.backToTop}>
                            <BackToTop layoutRootRef={rootRef}/>
                        </div>
                    </div>
                    <Footer />
                </div>
                <TooltipController />
            </ContextProviders>
        </ErrorBoundary>
    );
};
Layout.displayName = 'Layout';