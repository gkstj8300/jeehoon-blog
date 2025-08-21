import { RefObject, useCallback } from 'react';
import useEventListener from './useEventListener';

const useOuterClick = (
	target: RefObject<HTMLElement> | RefObject<HTMLElement>[],
	callback: (event: MouseEvent) => void
): void => {
	const handleOuterClick = useCallback(
		(event: MouseEvent) => {
			if (
				Array.isArray(target)
					? target.some(ref => includesEventTarget(event, ref.current))
					: includesEventTarget(event, target.current)
			) {
				return;
			}
			callback(event);
		},
		[callback, target]
	);

	useEventListener('click', handleOuterClick);
};

const includesEventTarget = (
	event: MouseEvent,
	target: HTMLElement | null
): boolean => {
	if (!target || !(event.target instanceof Node)) {
		return false;
	}

	return target.contains(event.target);
};

export default useOuterClick;
