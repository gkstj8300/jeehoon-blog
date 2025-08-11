import { GoogleAnalyticsFields } from '@/lib/logs/analytics/GoogleAnalyticsFields';

declare global {
	interface Window extends GoogleAnalyticsFields {}
}
