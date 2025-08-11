'use client';

import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';
import styles from './StandardLayout.module.scss';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { TooltipController } from '@/components/common/Tooltip';
import { ContextProviders } from '@/components/functional/ContextProviders';
import BackToTop from '@/components/layout/BackToTop';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
