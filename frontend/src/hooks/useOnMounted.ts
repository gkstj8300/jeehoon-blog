import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useOnMounted = (callback: () => any): void => {
	useEffect(() => {
		callback();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
};
