import { Auth } from '@/types/auth.type';
import instance from '@/utils/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../apis/authApi';

export const signoutThunkAction = createAsyncThunk('auth/signout', async () => {
	return await instance.get('/signout');
});
const initialState: Auth = {
	user: null,
	authenticated: false,
};
const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		signout(state, action) {
			return initialState;
		},
	},
	extraReducers(build) {
		build.addMatcher(authApi.endpoints.signout.matchFulfilled, (state, action) => {
			return initialState;
		});
		build.addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
			return { user: action.payload, authenticated: true };
		});
	},
});
export const { signout } = authSlice.actions;
export default authSlice;
