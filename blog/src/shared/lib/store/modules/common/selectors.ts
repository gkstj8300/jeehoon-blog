import { AppState } from '@/shared/lib/store';

export function selectTheme(state: AppState) {
	return state.common.theme;
}
