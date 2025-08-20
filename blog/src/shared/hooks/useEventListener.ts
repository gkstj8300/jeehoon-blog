import { useEffect } from 'react';

type Listener<E extends Event> = (event: E) => void;
type EventType = keyof WindowEventMap;

const useEventListener = <K extends EventType>(
	eventName: K,
	listener: Listener<WindowEventMap[K]>
): void => {
	useEffect(() => {
		window.addEventListener(eventName, listener);
		return () => window.removeEventListener(eventName, listener);
	}, [listener, eventName]);
};

export default useEventListener;
