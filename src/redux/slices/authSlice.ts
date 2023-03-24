import { Auth } from '@/types/auth.type';
import { createSlice } from '@reduxjs/toolkit';
import authApi from '../apis/authApi';

const initialState: Auth = {
	user: null,
	authenticated: false,
};
const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
			console.log(action.payload);
			state.user = action.payload;
		});
	},
});

export default authSlice;
