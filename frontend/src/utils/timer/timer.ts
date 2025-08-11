import { TimerProps } from './type';

const onBrowser = typeof window !== 'undefined';

export async function sleep(delay: number) {
	if (onBrowser) {
		return createPromise(delay);
	} else {
		return new Promise(resolve => setTimeout(resolve, delay));
	}
}

export function createPromise(
	delay: number,
	effect?: (props: TimerProps) => void
) {
	return new Promise<void>((resolve, reject) => {
		const timeoutId = window.setTimeout(resolve, delay);
		effect?.({ timeoutId, resolve, reject });
	});
}
