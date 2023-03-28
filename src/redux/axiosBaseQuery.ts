import '@/utils/axios';
import instance from '@/utils/axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';

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
			const response = await instance.request({ url, method, data, params });
			return { data: response };
		} catch (axiosError) {
			return {
				error: {
					status: (axiosError as AxiosError).response?.status,
					data: (axiosError as AxiosError).response?.data || (axiosError as AxiosError).message,
				},
			};
		}
	};
}
