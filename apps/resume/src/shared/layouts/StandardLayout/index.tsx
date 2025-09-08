'use client';

import { Layout, Ui, Providers } from '@jeehoon/ui';
import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';
import styles from './StandardLayout.module.scss';
import ErrorBoundary from '@/shared/ui/ErrorBoundary';

export default function StandardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rootRef = useRef<HTMLDivElement>(null);

	return (
		<ErrorBoundary>
			<Providers.ContextProviders>
				<SessionProvider>
					<div className={styles.container} ref={rootRef}>
						<Layout.Header domain='Resume'/>
						<div className={styles.layout}>
							{children}
							<div className={styles.backToTop}>
								<Layout.BackToTop layoutRootRef={rootRef} />
							</div>
						</div>
						<Layout.Footer />
					</div>
					<Ui.TooltipController />
				</SessionProvider>
			</Providers.ContextProviders>
		</ErrorBoundary>
	);
}
StandardLayout.displayName = 'StandardLayout';
