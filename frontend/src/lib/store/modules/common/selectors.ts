import { AppState } from '@/lib/store';

export function selectTheme(state: AppState) {
	return state.common.theme;
}
