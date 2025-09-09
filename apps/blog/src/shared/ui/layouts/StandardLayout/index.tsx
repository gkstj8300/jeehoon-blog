'use client';

import { Layout, Ui, Providers } from '@jeehoon/ui';
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
					<div className={styles.container} ref={rootRef}>
						<Layout.Header domain="Blog" />
						<div className={styles.layout}>
							{children}
							<div className={styles.backToTop}>
								<Layout.BackToTop layoutRootRef={rootRef} />
							</div>
						</div>
						<Layout.Footer />
					</div>
					<Ui.TooltipController />
			</Providers.ContextProviders>
		</ErrorBoundary>
	);
}
StandardLayout.displayName = 'StandardLayout';
