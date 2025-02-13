import React, { useCallback, useState } from 'react';
import { MainLoaderContext } from './MainLoader.context';

export const MainLoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(false);

	const showLoading = useCallback(() => {
		setLoading(true);
	}, []);

	const hideLoading = useCallback(() => {
		setLoading(false);
	}, []);

	return (
		<MainLoaderContext.Provider
			value={{ loading, showLoading, hideLoading }}
		>
			{children}
		</MainLoaderContext.Provider>
	);
};
MainLoaderProvider.displayName = 'MainLoaderProvider';
