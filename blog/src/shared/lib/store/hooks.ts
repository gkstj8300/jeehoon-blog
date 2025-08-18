import {
	TypedUseSelectorHook,
	useSelector as rawUseSelector,
	useStore as rawUseStore,
} from 'react-redux';
import { AppState } from '@/shared/lib/store';

export const useSelector: TypedUseSelectorHook<AppState> = rawUseSelector;
export const useStore = () => rawUseStore<AppState>();
