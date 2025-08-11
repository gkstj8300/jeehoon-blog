const STORAGE_KEY = 'theme';

/**
 * Update Theme
 */
export const updateLayoutTheme = (theme: string) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
};

export const getLayoutTheme = () => {
	const theme = localStorage.getItem(STORAGE_KEY);
	if (theme) {
		return JSON.parse(theme);
	}
};
