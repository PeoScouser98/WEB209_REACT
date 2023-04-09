import { signout } from '@/redux/slices/authSlice';
import store from '@/redux/store';
import axios, { AxiosError, AxiosResponse } from 'axios';
const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	({ data, config }) => {
		return data as AxiosResponse<any>;
	},
	async (error) => {
		const { response, config } = error;
		if (response.data.status === 401 && response.data.message === 'jwt expired') {
			console.log('Access token expired!');
			const newAccessToken = await instance.get('/refresh-token');
			console.log(`Refresh token: ${newAccessToken}`);
			return await instance.request(config);
		}
		if (response.data.status === 401 && response.data.message === 'jwt must be provided') {
			store.dispatch(signout(null));
		}
		return Promise.reject(error);
	}
);

export default instance;
