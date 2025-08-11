import { configureStore } from '@reduxjs/toolkit';
import { commonReducer } from './modules/common/slice';

export const store = configureStore({
	reducer: {
		common: commonReducer,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type GetState = typeof store.getState;
export type AppState = ReturnType<GetState>;
export type AppStore = typeof store;
