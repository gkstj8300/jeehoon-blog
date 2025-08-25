'use client';

import BackToTop from '@jeehoon/ui/components/BackToTop';
import Footer from '@jeehoon/ui/components/Footer';
import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';
import Header from '../Header';
import styles from './StandardLayout.module.scss';
import { ContextProviders } from '@/shared/functional/ContextProviders';
import ErrorBoundary from '@/shared/ui/ErrorBoundary';
import { TooltipController } from '@/shared/ui/Tooltip';

export default function StandardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rootRef = useRef<HTMLDivElement>(null);

	return (
		<ErrorBoundary>
			<ContextProviders>
				<SessionProvider>
					<div className={styles.container} ref={rootRef}>
						<Header />
						<div className={styles.layout}>
							{children}
							<div className={styles.backToTop}>
								<BackToTop layoutRootRef={rootRef} />
							</div>
						</div>
						<Footer />
					</div>
					<TooltipController />
				</SessionProvider>
			</ContextProviders>
		</ErrorBoundary>
	);
}
StandardLayout.displayName = 'StandardLayout';
