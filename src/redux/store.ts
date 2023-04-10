import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, REHYDRATE, REGISTER, FLUSH, PERSIST, PURGE, PAUSE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authApi from './apis/authApi';
import projectApi from './apis/projectApi';
import taskApi from './apis/taskApi';
import rootReducer from './rootReducer';
import activityApi from './apis/activityApi';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persitedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [REHYDRATE, REGISTER, FLUSH, PERSIST, PURGE, PAUSE],
			},
		}).concat([authApi.middleware, projectApi.middleware, taskApi.middleware, activityApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
