import { sendEvent } from "./sendEvent";

type ThemeChange = {
    event: 'ThemeChange';
    ga_eventType: string,
    ga_theme: string,
}

export const themeChange = (theme: string) => {
    sendEvent<ThemeChange>({
        event: 'ThemeChange',
        ga_eventType: 'Click',
        ga_theme: theme,
    });
}