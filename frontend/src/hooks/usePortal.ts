import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = () => {
	const portalRef = useRef<HTMLDivElement | null>(
		typeof document !== 'undefined' ? document.createElement('div') : null
	);

	useEffect(() => {
		if (portalRef.current) {
			const portalRoot = portalRef.current;
			document.body.appendChild(portalRoot);
			return () => {
				document.body.removeChild(portalRoot);
			};
		}
	}, []);

	const Portal: React.FC<{ children: React.ReactNode }> = useCallback(
		({ children }) => {
			if (!portalRef.current) {
				return null;
			}
			return createPortal(children, portalRef.current);
		},
		[]
	);
	return { Portal, portalRef };
};
