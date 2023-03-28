import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import projectApi from './apis/projectApi';
import taskApi from './apis/taskApi';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[authSlice.name]: authSlice.reducer,
	[projectApi.reducerPath]: projectApi.reducer,
	[taskApi.reducerPath]: taskApi.reducer,
});

export default rootReducer;
