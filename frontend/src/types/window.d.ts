import { GoogleAnalyticsFields } from "@/logs/analytics/GoogleAnalyticsFields";

declare global {
    interface Window extends GoogleAnalyticsFields {
        
    }
}