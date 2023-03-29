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
			state = initialState;
		},
	},
	extraReducers(build) {
		build.addCase(signoutThunkAction.fulfilled, (state, action) => {
			state.user = null;
			state.authenticated = false;
		});
		build.addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
			state.user = action.payload;
			state.authenticated = true;
		});
	},
});
export const { signout } = authSlice.actions;
export default authSlice;
