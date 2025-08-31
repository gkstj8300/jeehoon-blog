import { isObject, toNumeric } from '@jeehoon/utils';
import { ApplicationError } from './errors/ApplicationError';
import { AssertionError } from './errors/app/AssertionError';

/**
 * Verify that the target is null or undefined.
 * @param {T | null | undefined} target - verification target.
 * @param {string} message - error message on invalid
 * @throws {ApplicationError} throws error if target is null or undefined.
 * @template T
 */
export function assertNotNull<T>(
	target: T | undefined | null,
	message?: string
): asserts target is T {
	if (target == null) {
		throw new ApplicationError(
			message ?? `target is null or undefined: ${target}`
		);
	}
}

/**
 * Verify that the target is empty.
 * @param {T | null | undefined} target - verification target.
 * @param message
 * @throws {ApplicationError} throws error if target is empty string or empty array.
 * @template T, E
 */
export function assertNotEmpty<T extends string | Array<E>, E>(
	target: T | undefined | null,
	message?: string
): asserts target is T {
	assertNotNull(target);
	if (target.length === 0) {
		throw new ApplicationError(message ?? `target is empty ${typeof target}.`);
	}
}

/**
 * Throws an error if the validation target is not an object.
 * @param {unknown} value - validation target
 * @throws {ApplicationError} Throws if "value" is not an object.
 */
export function assertObject(value: unknown): asserts value is object {
	if (!isObject(value)) {
		throw new ApplicationError(`Given "value" is not object. ${value}`);
	}
}

export function assertNotArray<T>(value: T[] | T): asserts value is T {
	if (Array.isArray(value)) {
		throw new AssertionError('not-array', `Given "value" is Array: ${value}`);
	}
}

export function assertStringOrNumeric(
	value: unknown,
	message?: string
): asserts value is number | string {
	if (!['number', 'string'].includes(typeof value)) {
		throw new AssertionError(
			'string-or-numeric',
			message || `Given "value" is not string or number: ${value}`
		);
	}
}

/**
 * Throws an error if the validation target is invalid percent.
 * @param {number} value - validation target
 * @throws {ApplicationError} Throws if "value" is invalid percent.
 */
export function assertValidPercent(value: number) {
	if (value < 0 || value > 100) {
		throw new ApplicationError(`Given "value" is invalid percent. ${value}`);
	}
}

/**
 * Throws an error if the validation target is not an array.
 * @param {T[] | T} value - validation target
 * @throws {ApplicationError} Throws if "value" is not an array.
 */
export function assertArray<T>(value: T[] | T): asserts value is T[] {
	if (!Array.isArray(value)) {
		throw new AssertionError('array', `Given "value" is not Array: ${value}`);
	}
}

/**
 * Throws an error if the validation target is invalid page on url.
 * @param {string} value - validation target
 * @throws {ApplicationError} Throws if "value" is invalid page.
 */
export function assertPositiveNumeric(value?: string) {
	if (value === undefined) {
		return;
	}

	const page = toNumeric(value);
	if (page === undefined || page <= 0) {
		throw new ApplicationError(
			`Given "value" is not a positive number string. ${value}`
		);
	}
}
