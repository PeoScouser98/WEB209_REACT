import { User } from '@/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	tagTypes: ['Auth'],
	refetchOnMountOrArgChange: true,
	endpoints(build) {
		return {
			getUser: build.query<User, undefined>({
				query() {
					return { url: '/user', method: 'GET' };
				},
				providesTags: ['Auth'],
			}),
		};
	},
});

export const { useGetUserQuery } = authApi;
export default authApi;
