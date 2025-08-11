import Router from 'next/router';

/** Session storage key */
const STORAGE_KEY = 'ROUTER_HISTORY';

type History = {
	current: string;
	prev?: string;
};

class RouterHistory {
	getReferrer() {
		return this.getHistory()?.prev;
	}

	private setHistory(history: History) {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));
	}

	private pushHistory(nextPath: string) {
		const history = this.getHistory();
		this.setHistory({
			current: `${location.origin}${nextPath}`,
			prev: history?.current,
		});
	}

	private getHistory(): History | null {
		const history = sessionStorage.getItem(STORAGE_KEY);
		if (history) {
			try {
				return JSON.parse(history);
			} catch (error) {
				Error(`Could not convert to JSON. value=${history}, ${error}`);
			}
		}
		return null;
	}

	constructor() {
		if (typeof document !== 'undefined') {
			if (isNotReload()) {
				this.setHistory({ prev: document.referrer, current: location.href });
			}
			Router.events.on('routeChangeStart', location => {
				if (document.readyState === 'complete') {
					this.pushHistory(location);
				}
			});
		}
	}
}
export const routerHistory = new RouterHistory();

function isNotReload() {
	if (performance.getEntriesByType == null) {
		return false;
	}

	const [entry] = performance.getEntriesByType('navigation');
	return isPerformanceNavigationTiming(entry) && entry.type !== 'reload';
}

function isPerformanceNavigationTiming(
	entry?: PerformanceEntry
): entry is PerformanceNavigationTiming {
	return entry != null && 'type' in entry;
}
