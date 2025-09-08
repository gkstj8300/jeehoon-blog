import { ParsedUrlQuery } from 'querystring';
import { assertNotEmpty } from '@/shared/utils/assertions';

/**
 * Get only one param records.
 * @param query
 * @param keys
 */
export function getOneParams<K extends string>(
	query: ParsedUrlQuery,
	...keys: K[]
): Record<K, string | undefined> {
	assertNotEmpty(keys);

	const result: Record<string, string | undefined> = {};
	for (const key of keys) {
		const param = query[key];
		const value = getOneParam(param);
		if (value) {
			result[key] = value;
		}
	}
	return result;
}

/**
 * Get only one param.
 * @param param
 */
export function getOneParam(param: string | string[] | undefined) {
	if (!param) {
		return undefined;
	}
	return typeof param === 'string' ? param : param[param.length - 1];
}
