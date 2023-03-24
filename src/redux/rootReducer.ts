import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[authSlice.name]: authApi.reducer,
});

export default rootReducer;
