export type TimerProps = {
	timeoutId: number;
	resolve: (value: void | PromiseLike<void>) => void;
	reject: (reason?: unknown) => void;
};
