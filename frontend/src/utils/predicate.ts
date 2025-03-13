/**
 * Guarantee argument value is not null.
 * @param {T|null|undefined} value - value
 * @returns {boolean} if given value is not null, returns true.
 * @template T
 */
export function notNull<T>(value: T | null | undefined): value is T {
	return value != null;
}

/**
 * Guarantee argument value is not empty.
 * @param {T|null|undefined} value - value
 * @returns {boolean} if given value is not null, returns true.
 * @template T
 */
export function notEmpty<T extends string | Array<E>, E>(
	value: T | undefined | null
): value is T {
	return notNull(value) && value.length !== 0;
}

/**
 * Guarantee argument value is empty.
 * @param {T|null|undefined} value - value
 * @returns {boolean} if given value is null, returns true.
 * @template T
 */
export function isEmpty<T extends string | Array<E>, E>(
	value: T | undefined | null
): value is undefined | null {
	return !notEmpty(value);
}
