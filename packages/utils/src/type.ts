/**
 * type 병합
 */
export type Merge<B extends object, S extends object> = S & Omit<B, keyof S>;

/**
 * Converts snake case characters to camel case.
 *
 * @template S - snake characters
 * @example
 * type FooBar = SnakeToCamel<'foo_bar'>; // 'fooBar'
 */
export type SnakeToCamel<S extends string> =
	S extends `${infer FIRST}_${infer REST}`
		? `${FIRST}${Capitalize<SnakeToCamel<REST>>}`
		: S;

/**
 * Convert the property of any object from snake case to camel case.
 * @template IF - any object
 * @example
 * type Foo = ToCamelProps<{ foo_bar: string, bar_baz: number }>; // { fooBar: string, barBaz: number }
 */
export type SnakePropsToCamel<IF extends object> = {
	[K in keyof IF as K extends string ? SnakeToCamel<K> : K]: IF[K];
};

/**
 * May be T type object.
 */
export type MayBe<T extends object = object> = { [K in keyof T]: unknown };

/**
 * One of the specified properties is required, the other properties are optional.
 *
 * @param T - any object type
 * @param {keyof T} K - one of the required properties
 * @template T, K
 */
export type EitherRequired<T, K extends keyof T> = K extends keyof T
	? Required<Pick<T, K>> & Partial<Omit<T, K>>
	: never;

export type PartiallyRequired<T, K extends keyof T> = K extends keyof T
	? Required<Pick<T, K>> & Omit<T, K>
	: never;
