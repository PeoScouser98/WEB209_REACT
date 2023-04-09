import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import projectApi from './apis/projectApi';
import taskApi from './apis/taskApi';
import authSlice from './slices/authSlice';
import projectSlice from './slices/projectSlice';
import taskSlice from './slices/taskSlice';
import activityApi from './apis/activityApi';

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[authSlice.name]: authSlice.reducer,
	[projectApi.reducerPath]: projectApi.reducer,
	[activityApi.reducerPath]: activityApi.reducer,
	[projectSlice.name]: projectSlice.reducer,
	[taskApi.reducerPath]: taskApi.reducer,
	[taskSlice.name]: taskSlice.reducer,
});

export default rootReducer;
