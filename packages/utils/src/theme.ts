const STORAGE_KEY = 'theme';
const COOKIE_NAME = 'theme';
const DOMAIN = '.baakhan.com';
const MAX_AGE = 60 * 60 * 24 * 365;

export type Theme = 'light' | 'dark';

export function setThemeCookie(theme: Theme) {
  const cookie = [
    `${COOKIE_NAME}=${encodeURIComponent(theme)}`,
    `Domain=${DOMAIN}`,
    `Path=/`,
    `Max-Age=${MAX_AGE}`,
    `Secure`,
    `SameSite=Lax`
  ].join('; ');
  document.cookie = cookie;
}

/**
 * Update Theme
 */
export function updateLayoutTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  setThemeCookie(theme);
}

export const getLayoutTheme = () => {
	const theme = localStorage.getItem(STORAGE_KEY);
	if (theme) {
		return JSON.parse(theme);
	}
};
