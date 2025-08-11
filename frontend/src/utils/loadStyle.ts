import { CSSProperties } from 'react';

export const loadStyle = async (
	theme: string
): Promise<{ [key: string]: CSSProperties }> => {
	if (theme === 'dark') {
		const mod = await import(
			'react-syntax-highlighter/dist/esm/styles/prism/material-dark'
		);
		return mod.default;
	}
	const mod = await import(
		'react-syntax-highlighter/dist/esm/styles/prism/coy'
	);
	return mod.default;
};
