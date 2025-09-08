const STORAGE_KEY = 'theme';

/**
 * Update Theme
 */
export const updateLayoutTheme = (theme: string) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
	document.documentElement.setAttribute('data-theme', theme);
	document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
};

export const getLayoutTheme = () => {
	const theme = localStorage.getItem(STORAGE_KEY);
	if (theme) {
		return JSON.parse(theme);
	}
};
