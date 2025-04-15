import { GoogleAnalyticsFields } from "@/logs/analytics/GoogleAnalyticsFields";

const variablesInitialValues: {
	[P in keyof Required<
		Omit<
        GoogleAnalyticsFields,
			'dataLayer'
		>
	>]: GoogleAnalyticsFields[P];
} = {
    ga_eventType: undefined,
    ga_layout: undefined,
	ga_post_title: undefined,
	ga_post_regDate: undefined,
	ga_post_mainTag: undefined,
};

export const clearVariables = () => {
    Object.assign(window, variablesInitialValues);
}