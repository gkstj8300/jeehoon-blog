import { createContext, useContext } from 'react';
import { MainLoader } from './MainLoader';

export const MainLoaderContext = createContext({
	loading: false,
	showLoading: () => {},
	hideLoading: () => {},
});

export const MainLoaderController: React.VFC = () => {
	const { loading } = useContext(MainLoaderContext);

	if (!loading) {
		return null;
	}

	return loading && <MainLoader />;
};
MainLoaderController.displayName = 'MainLoaderController';

export const useMainLoader = () => useContext(MainLoaderContext);
