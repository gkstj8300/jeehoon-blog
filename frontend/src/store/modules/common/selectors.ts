import { AppState } from '@/store';

export function selectTheme(state: AppState) {
    return state.common.theme;
}