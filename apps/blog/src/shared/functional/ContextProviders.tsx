import React from 'react';
import MainLoaderProvider from '@/shared/ui/MainLoader';
import { ConfirmModalProvider } from '@/shared/ui/Modal/ConfirmModal/ConfirmModal.context';
import { TooltipProvider } from '@/shared/ui/Tooltip';

/**
 * Context providers
 */
export const ContextProviders: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<MainLoaderProvider>
			<TooltipProvider>
				<ConfirmModalProvider>{children}</ConfirmModalProvider>
			</TooltipProvider>
		</MainLoaderProvider>
	);
};
ContextProviders.displayName = 'ContextProviders';
