import React from 'react';
import { MainLoaderProvider } from '@/components/ui/loaders/MainLoaderProvider';
import { ConfirmModalProvider } from '@/components/ui/modals/ConfirmModal';
import { TooltipProvider } from '@/components/ui/tooltips';

/**
 * Context providers
 */
export const ContextProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<MainLoaderProvider>
			<TooltipProvider>
				<ConfirmModalProvider>
					{children}
				</ConfirmModalProvider>
			</TooltipProvider>
		</MainLoaderProvider>
	);
};
ContextProviders.displayName = 'ContextProviders';
