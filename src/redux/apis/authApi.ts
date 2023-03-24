import { IUser } from '@/types/user.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	tagTypes: ['Auth'],
	endpoints: (builder) => ({
		getUser: builder.query<IUser, void>({
			query: () => ({ url: '/auth/user', method: 'GET' }),
			providesTags: ['Auth'],
		}),
	}),
});
export const { useGetUserQuery } = authApi;
export default authApi;
