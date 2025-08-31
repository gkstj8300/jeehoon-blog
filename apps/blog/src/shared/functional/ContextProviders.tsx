import { Ui } from '@jeehoon/ui';
import React from 'react';
import { ConfirmModalProvider } from '@/shared/ui/Modal/ConfirmModal/ConfirmModal.context';

/**
 * Context providers
 */
export const ContextProviders: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<Ui.MainLoaderProvider>
			<Ui.TooltipProvider>
				<ConfirmModalProvider>{children}</ConfirmModalProvider>
			</Ui.TooltipProvider>
		</Ui.MainLoaderProvider>
	);
};
ContextProviders.displayName = 'ContextProviders';
