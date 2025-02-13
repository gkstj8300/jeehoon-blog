import Head from 'next/head';
import React from 'react';
import styles from './ErrorBoundary.module.scss';

/**
 * error boundary props
 */
interface ErrorProps {
	children?: React.ReactNode;
}

/**
 * error boundary state
 */
interface ErrorState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
	/**
	 * constructor
	 */
	constructor(props: ErrorProps) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	/**
	 * displayName
	 */
	static displayName = 'ErrorBoundary';

/**
	 * 다음 렌더링 풀백 UI가 표시되도록 state 갱신
	 */
	static getDerivedStateFromError(): ErrorState {
		return { hasError: true };
	}

	render(): React.ReactNode {
		// Header
		const ErrorPageHeader: React.FC = () => {
			return (
				<header className={styles.headerBox}>
					<div className={styles.header}>
                        Jee-Hoon Blog
					</div>
				</header>
			);
		};

		// Footer
		const ErrorPageFooter: React.FC = () => {
			return (
				<footer className={styles.footer}>
					<div className={styles.copyright}>
                        Jee-Hoon Blog
					</div>
				</footer>
			);
		};

		if (this.state.hasError) {
			return (
				<>
					<Head>
						<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
						<title>Jee-Hoon Blog</title>
					</Head>
					<ErrorPageHeader />
					<ErrorPageFooter />
				</>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
