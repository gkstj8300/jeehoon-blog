import { createContext } from 'react';

interface ErrorBoundaryContextType {
	hasError: boolean;
	error: unknown;
	/* eslint-disable @typescript-eslint/no-explicit-any */
	resetErrorBoundary: (...args: any[]) => void;
}

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextType>({
	hasError: false,
	error: null,
	resetErrorBoundary: () => {},
});
