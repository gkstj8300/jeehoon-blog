/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ErrorInfo, ComponentType, ReactNode } from 'react';

export interface FallbackProps {
	error: unknown;
	resetErrorBoundary: (...args: any[]) => void;
}

export interface ErrorBoundaryProps {
	children: ReactNode;

	// fallback 우선순위: fallbackRender > FallbackComponent > fallback
	fallback?: ReactNode | null;
	fallbackRender?: (props: FallbackProps) => ReactNode;
	FallbackComponent?: ComponentType<FallbackProps>;

	// reset 제어
	onReset?: (
		details:
			| { reason: 'imperative-api'; args: any[] }
			| { reason: 'keys'; prev: any[] | undefined; next: any[] | undefined }
	) => void;
	resetKeys?: any[];

	// error 처리 콜백
	onError?: (error: Error, info: ErrorInfo) => void;
}
