import { RefObject, useCallback } from 'react';

export function useScrollStart(targetRef: RefObject<HTMLElement>) {
	const onStartScroll = useCallback(
		(callback: () => void) => {
			const target = targetRef.current;
			if (target) {
				const onScroll = () => {
					callback();
					target.removeEventListener('scroll', onScroll);
				};
				target.addEventListener('scroll', onScroll);

				return () => target.removeEventListener('scroll', onScroll);
			}
		},
		[targetRef]
	);
	return { onStartScroll };
}
