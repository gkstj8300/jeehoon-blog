import { SnakeToCamel } from './type';

/**
 * Converts a snake case string to a camel case.
 *
 * @param from - snake case string
 * @returns camel case string
 * @template T
 */
export function snakeToCamel<T extends string>(from: string): SnakeToCamel<T> {
	return from
		.split('_')
		.map((token, index) =>
			index > 0 ? token.charAt(0).toUpperCase() + token.slice(1) : token
		)
		.join('') as SnakeToCamel<T>;
}

export function padZero(value: number | string, maxLength: number) {
	return String(value).padStart(maxLength, '0');
}

export function removeTags(input?: string) {
	if (!input) {
		return '';
	}
	const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	return input.replace(tags, '');
}

export function toNumeric(string: string | undefined) {
	if (!string || Number.isNaN(Number(string))) {
		return undefined;
	}
	return Number(string);
}

/**
 * Insert a backslash before characters
 */
export const escapeWithBackslash = (value: string, search: string) => {
	return value.replaceAll(search, `\\${search}`);
};

/**
 * Calculates the width of a multibyte string.
 * @param {string} string - The input string to calculate the width for.
 * @returns {number} The width of the multibyte string.
 */
export function calculateMultiByteWidth(string: string) {
	let width = 0;

	for (let i = 0; i < string.length; i++) {
		// Get the code point of the current character.
		const code = string.codePointAt(i);

		// If the code point is not valid, return the current width.
		if (!code) {
			return width;
		}

		// If the character is a single-byte ASCII character, add 1 to the width.
		if (code <= 0x7f) {
			width += 1;
		} // If the character is a multibyte character, check its width.
		else {
			width += 2;
		}
	}

	return width;
}
