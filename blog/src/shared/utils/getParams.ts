import { ParsedUrlQuery } from 'querystring';
import { getOneParams } from '@/shared/utils/query';

export function getParams(query: ParsedUrlQuery) {
	const params = getOneParams(query, 'slug');

	return {
		slug: params.slug,
	};
}
