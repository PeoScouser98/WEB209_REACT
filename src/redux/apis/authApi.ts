import { IUser } from '@/types/user.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosResponse } from 'axios';
import axiosBaseQuery from '../axiosBaseQuery';

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	tagTypes: ['Auth'],
	refetchOnMountOrArgChange: true,
	endpoints(build) {
		return {
			getUser: build.query<IUser, void>({
				query() {
					return { url: '/user', method: 'get' };
				},

				providesTags: ['Auth'],
			}),
			signout: build.mutation<AxiosResponse, void>({
				query() {
					return { url: '/signout', method: 'post' };
				},
				invalidatesTags: ['Auth'],
			}),
		};
	},
});

export const { useGetUserQuery, useSignoutMutation } = authApi;
export default authApi;
