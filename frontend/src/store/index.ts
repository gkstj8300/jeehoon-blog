import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type GetState = typeof store.getState;
export type AppState = ReturnType<GetState>;
export type AppStore = typeof store;
