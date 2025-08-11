import React from 'react';
import MainLoaderProvider from '@/components/common/MainLoader';
import { ConfirmModalProvider } from '@/components/common/Modal/ConfirmModal/ConfirmModal.context';
import { TooltipProvider } from '@/components/common/Tooltip';

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
