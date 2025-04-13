import { GaVariables } from "@/logs/analytics/googleFields";

const variablesInitialValues: {
	[P in keyof Required<
		Omit<
        GaVariables,
			'dataLayer'
		>
	>]: GaVariables[P];
} = {
    ga_name: undefined,
    ga_eventType: undefined,
    ga_layout: undefined,
};

export const clearVariables = () => {
    Object.assign(window, variablesInitialValues);
}