import { tractPageView } from "./trackPageView";
import { clearVariables } from "@/logs/analytics/clearVariables";

export const trackAboutView = async () => {
    await setVariables();
    tractPageView();
}

export const setVariables = async () => {
    clearVariables();
    window.ga_eventType = 'PageView';
    window.ga_layout = 'About';
}