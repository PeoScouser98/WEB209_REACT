import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';
import { IActivity } from '@/types/activity.type';

const activityApi = createApi({
	tagTypes: ['Activity'],
	reducerPath: 'activities',
	baseQuery: axiosBaseQuery(),
	endpoints(build) {
		return {
			getActivityLogs: build.query<Array<IActivity>, void>({
				query() {
					return { url: '/activities', method: 'get' };
				},
				providesTags: ['Activity'],
			}),
			createActivityLog: build.mutation<Array<IActivity>, Pick<IActivity, 'log'>>({
				query(payload) {
					return { url: 'activities', method: 'post', data: payload };
				},
			}),
		};
	},
});

export const { useCreateActivityLogMutation, useGetActivityLogsQuery } = activityApi;

export default activityApi;
