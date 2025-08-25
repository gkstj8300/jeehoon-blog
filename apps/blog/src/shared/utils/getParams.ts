import { ParsedUrlQuery } from 'querystring';
import { getOneParams } from './query';

export function getParams(query: ParsedUrlQuery) {
	const params = getOneParams(query, 'slug');

	return {
		slug: params.slug,
	};
}
