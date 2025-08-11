export type TimerProps = {
	timeoutId: number;
	resolve: (value: void | PromiseLike<void>) => void;
	reject: (reason?: unknown) => void;
};

export type Merge<B extends object, S extends object> = S & Omit<B, keyof S>;
