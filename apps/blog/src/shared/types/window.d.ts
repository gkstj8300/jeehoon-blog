import { GoogleAnalyticsFields } from '@/shared/lib/logs/analytics/GoogleAnalyticsFields';

declare global {
	interface Window extends GoogleAnalyticsFields {}
}
