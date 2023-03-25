import '@/configs/axios.config';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export default function axiosBaseQuery(): BaseQueryFn<
	{
		url: string;
		method: AxiosRequestConfig['method'];
		data?: AxiosRequestConfig['data'];
		params?: AxiosRequestConfig['params'];
	},
	unknown,
	unknown
> {
	return async ({ url, method, data, params }) => {
		try {
			const response = await axios.request({ url, method, data, params });
			return { data: response };
		} catch (axiosError) {
			let err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};
}
