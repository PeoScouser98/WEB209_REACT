import axios, { type AxiosInstance } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	({ data, config }) => {
		return data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
