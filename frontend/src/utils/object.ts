import { snakeToCamel } from '@/utils/string';
import { MayBe, SnakePropsToCamel } from '@/utils/type';

/**
 * determine object type of value.
 * @param {unknown} value - value
 * @returns {boolean} if value is object, returns true, otherwise it returns false.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isObject<T extends object = object>(
	value: unknown
): value is MayBe<T> {
	const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
}

/**
 * 指定のキーを対象のオブジェクトから削除します。
 *
 * @param {Record<K, V>} target - 対象のオブジェクト
 * @param {...K} keys - 削除したいキー
 * @returns {Record<K, V>} 指定のキーが削除されたオブジェクト
 * @template K, V
 */
export function remove<K extends string | number, V>(
	target: Record<K, V>,
	...keys: K[]
): Record<K, V> {
	const removed = { ...target };
	for (const key of keys) {
		delete removed[key];
	}
	return removed;
}

/**
 * Set the object's properties to camelcase.
 * Not supported for nested objects.
 *
 * @param from
 */
export function propsToCamel<T extends object>(from: T): SnakePropsToCamel<T> {
	const to: { [key: string]: unknown } = {};
	for (const [key, value] of Object.entries(from)) {
		to[snakeToCamel(key)] = value;
	}
	return to as SnakePropsToCamel<T>;
}

/**
 * Create records from entries.
 * @param entries - key / value list
 */
export function fromEntries<K extends string | number = string, V = unknown>(
	entries: [K, V][]
): Record<K, V> {
	const obj = {} as Record<K, V>;
	for (const [key, value] of entries) {
		obj[key] = value;
	}
	return obj;
}

/**
 * Pick the object's properties.
 */
export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	// NOTE: It is prohibited to use the [as] operator.
	// This is special syntax for the [Pick] type.
	const result: Pick<T, K> = {} as Pick<T, K>;

	keys.forEach(key => {
		result[key] = obj[key];
	});

	return result;
}

/**
 * Omit the object's properties.
 */
export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	keys.forEach(key => {
		delete obj[key];
	});

	return obj;
}

/**
 * It returns a copy of object which all empty properties (undefined, null, or an empty string) are removed
 * @param object
 * @returns
 */
export function removeEmptyProperties<T extends object>(object: T): Partial<T> {
	const clone = { ...object };
	for (const key in clone) {
		const value = clone[key];
		if (
			value === undefined ||
			value === null ||
			(typeof value === 'string' && value === '')
		) {
			delete clone[key];
		}
	}
	return clone;
}

/**
 * Checks if an object is empty.
 * @param {Object} object - The object to be checked for emptiness.
 * @returns {boolean} Returns true if the object is empty, otherwise false.
 */
export function isEmpty<T extends object>(object: T) {
	return (
		object && Object.keys(object).length === 0 && object.constructor === Object
	);
}
