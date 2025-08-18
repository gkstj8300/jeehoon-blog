import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CommonState } from './types';

const initialState: CommonState = {
	theme: 'dark', // light or dark
};

const slice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		updateTheme(state, action: PayloadAction<string>) {
			return { ...state, theme: action.payload };
		},
	},
});

export const { reducer: commonReducer, actions } = slice;
