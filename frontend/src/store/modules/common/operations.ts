import { Dispatch } from 'redux';
import { actions } from './slice';
import { getLayoutTheme, updateLayoutTheme } from '@/servieces/localStorage/common';
import { AppStore } from '@/store';

export const loadLayoutTheme = (dispatch: Dispatch) => {
    dispatch(actions.updateTheme(getLayoutTheme() || 'light'));
};

export function toggleUpdateLayoutTheme(store: AppStore) {
    return (currentTheme: string) => {
        const theme = currentTheme === 'light' ? 'dark' : 'light';
        updateThemeState(store, theme);
    };
}

const updateThemeState = (store: AppStore, theme: string) => {
    store.dispatch(actions.updateTheme(theme));
    updateLayoutTheme(theme);
};