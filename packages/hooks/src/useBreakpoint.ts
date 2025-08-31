'use client';

import { useEffect, useState } from 'react';

export function useBreakpoint(px = 1024) {
	const [isNarrow, setIsNarrow] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => setIsNarrow(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return isNarrow < px;
}
