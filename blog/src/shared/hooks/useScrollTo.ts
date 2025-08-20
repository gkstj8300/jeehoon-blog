import { RefObject, useCallback, useRef } from 'react';

export function useScrollTo(targetRef: RefObject<HTMLElement>) {
	const scrollingRef = useRef<boolean>(false);

	const scrollTo = useCallback(
		(
			offset: number,
			options?: { behavior?: 'smooth' | 'auto'; callback?: () => void }
		) => {
			const target = targetRef.current;

			if (target) {
				let timerId: number | null = null;

				const onScroll = () => {
					scrollingRef.current = true;
					if (timerId != null) {
						window.clearTimeout(timerId);
					}

					timerId = window.setTimeout(() => {
						scrollingRef.current = false;
						target.removeEventListener('scroll', onScroll);
						options?.callback?.();
					}, 100);
				};

				target.addEventListener('scroll', onScroll);
				onScroll();
				window.scrollTo({ top: offset, ...options });
			}
		},
		[targetRef]
	);

	return { scrollingRef, scrollTo };
}
