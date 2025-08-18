import React, { useCallback, useState } from 'react';
import { MainLoaderContext } from './MainLoader.context';

interface MainLoaderProviderProps {
	children: React.ReactNode;
}

export default function MainLoaderProvider({
	children,
}: MainLoaderProviderProps) {
	const [loading, setLoading] = useState<boolean>(false);

	const showLoading = useCallback(() => {
		setLoading(true);
	}, []);

	const hideLoading = useCallback(() => {
		setLoading(false);
	}, []);

	return (
		<MainLoaderContext.Provider value={{ loading, showLoading, hideLoading }}>
			{children}
		</MainLoaderContext.Provider>
	);
}

MainLoaderProvider.displayName = 'MainLoaderProvider';
