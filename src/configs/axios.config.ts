import axios, { type AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
