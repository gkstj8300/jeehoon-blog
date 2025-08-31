'use client';

import { Ui } from '@jeehoon/ui';
import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';
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
						<Ui.Header />
						<div className={styles.layout}>
							{children}
							<div className={styles.backToTop}>
								<Ui.BackToTop layoutRootRef={rootRef} />
							</div>
						</div>
						<Ui.Footer />
					</div>
					<TooltipController />
				</SessionProvider>
			</ContextProviders>
		</ErrorBoundary>
	);
}
StandardLayout.displayName = 'StandardLayout';
