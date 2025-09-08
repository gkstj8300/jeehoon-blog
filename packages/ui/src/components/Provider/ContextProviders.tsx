"use client";

import { ConfirmModalProvider } from '../Modal/ConfirmModal';
import MainLoaderProvider from '../MainLoader';
import { TooltipProvider } from '../Tooltip';

/**
 * Context providers
 */
export default function ContextProviders({
	children,
}: { children: React.ReactNode }) {
	return (
		<MainLoaderProvider>
			<TooltipProvider>
				<ConfirmModalProvider>{children}</ConfirmModalProvider>
			</TooltipProvider>
		</MainLoaderProvider>
	);
};
ContextProviders.displayName = 'ContextProviders';
