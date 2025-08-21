/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Component, createElement, isValidElement } from 'react';
import type { ErrorInfo } from 'react';
import { ErrorBoundaryContext } from './ErrorBoundaryContext';
import type { ErrorBoundaryProps, FallbackProps } from '@/shared/types/errorBoundary';

interface ErrorState {
	hasError: boolean;
	error: Error | null;
}

const initialState: ErrorState = {
	hasError: false,
	error: null,
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = initialState;
		this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}

	resetErrorBoundary(...args: any[]) {
		if (this.state.error !== null) {
			this.props.onReset?.({
				args,
				reason: 'imperative-api',
			});
			this.setState(initialState);
		}
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		this.props.onError?.(error, info);
	}

	componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorState) {
		if (
			this.state.hasError &&
			prevState.error !== null &&
			hasArrayChanged(prevProps.resetKeys, this.props.resetKeys)
		) {
			this.props.onReset?.({
				next: this.props.resetKeys,
				prev: prevProps.resetKeys,
				reason: 'keys',
			});
			this.setState(initialState);
		}
	}

	render() {
		const { children, fallbackRender, FallbackComponent, fallback } =
			this.props;
		const { hasError, error } = this.state;

		let childToRender = children;

		if (hasError) {
			const props: FallbackProps = {
				error: error!,
				resetErrorBoundary: this.resetErrorBoundary,
			};

			if (typeof fallbackRender === 'function') {
				childToRender = fallbackRender(props);
			} else if (FallbackComponent) {
				childToRender = createElement(FallbackComponent, props);
			} else if (fallback && isValidElement(fallback)) {
				childToRender = fallback;
			} else {
				throw error;
			}
		}

		return createElement(
			ErrorBoundaryContext.Provider,
			{
				value: { hasError, error, resetErrorBoundary: this.resetErrorBoundary },
			},
			childToRender
		);
	}
}

function hasArrayChanged(a: any[] = [], b: any[] = []) {
	return (
		a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))
	);
}

export default ErrorBoundary;
