/* eslint-disable @typescript-eslint/ban-types */

import { TFunction } from 'i18next';

type ValidationErrorTranslator<
	AP extends Record<string, string | number | undefined> = {},
> = (params: DefaultParams & AP) => string;

type DefaultParams = { path: string; label?: string };

type CustomLocale = {
	mixed: {
		required: ValidationErrorTranslator;
	};
	string: {
		min: ValidationErrorTranslator<{ min: number }>;
		max: ValidationErrorTranslator<{ max: number }>;
		customerReference: ValidationErrorTranslator<{
			max: number;
		}>;
	};
	number: {
		min: ValidationErrorTranslator<{ min: number }>;
	};
	boolean: {
		isValue: ValidationErrorTranslator;
	};
	array: {
		min: ValidationErrorTranslator<{ min: number }>;
	};
};

function resolveMessage<P extends Record<string, string | number> = {}>(
	type: string,
	params: P & DefaultParams,
	t: TFunction
) {
	const { path, label, ...restPrams } = params;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return t(`common.$validations.${type}`, {
		field: label ?? t(`common.$fields.${path}`),
		...restPrams,
	});
}

const createLocale = (t: TFunction): CustomLocale => {
	return {
		mixed: {
			required: params => resolveMessage(`required`, params, t),
		},
		string: {
			min: params => resolveMessage(`min`, params, t),
			max: params => resolveMessage(`max`, params, t),
			customerReference: params =>
				resolveMessage(`customerReference`, params, t),
		},
		number: {
			min: params => resolveMessage(`numberMin`, params, t),
		},
		boolean: {
			isValue: params => resolveMessage(`isTrue`, params, t),
		},
		array: {
			min: params => resolveMessage(`arrayMin`, params, t),
		},
	};
};

export { createLocale, resolveMessage };
