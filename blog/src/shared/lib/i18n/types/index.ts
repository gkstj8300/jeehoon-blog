export type Translation = {
	[i18nKey: string]: string | Translation;
};

export type Resource = {
	/** translation namespace (i18next default namespace) */
	translation: Translation;
};

export type Resources = {
	[language: string]: Resource;
};
