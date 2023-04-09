import { Project } from '@/types/project.type';
import { Task } from '@/types/task.type';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

const taskApi = createApi({
	reducerPath: 'taskApi',
	baseQuery: axiosBaseQuery(),
	tagTypes: ['Task'],
	endpoints(build) {
		return {
			getTasksByProject: build.query<Array<Task>, string>({
				query(projectId) {
					return { url: `/tasks/${projectId}`, method: 'get' };
				},
				providesTags: ['Task'],
			}),
			createTask: build.mutation<Task, { projectId: string; newTask: Omit<Task, '_id'> }>({
				query(payload) {
					return { url: `/tasks/${payload.projectId}`, method: 'post', data: payload.newTask };
				},
				invalidatesTags: ['Task'],
			}),
			updateTask: build.mutation<Task, { id: string; data: Partial<Task>; params: { [key: string]: string } }>({
				query(payload) {
					return { url: `/tasks/${payload.id}`, method: 'patch', data: payload.data, params: payload.params };
				},
				invalidatesTags: ['Task'],
			}),
		};
	},
});

export const { useCreateTaskMutation, useGetTasksByProjectQuery, useUpdateTaskMutation } = taskApi;

export default taskApi;
