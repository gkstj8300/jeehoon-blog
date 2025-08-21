'use client';

import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';
import styles from './StandardLayout.module.scss';
import { ContextProviders } from '@/shared/functional/ContextProviders';
import ErrorBoundary from '@/shared/ui/ErrorBoundary';
import { TooltipController } from '@/shared/ui/Tooltip';
import BackToTop from '@/shared/ui/layouts/BackToTop';
import Footer from '@/shared/ui/layouts/Footer';
import Header from '@/shared/ui/layouts/Header';

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
