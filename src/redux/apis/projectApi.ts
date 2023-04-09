import { Project } from '@/types/project.type';
import { IUser } from '@/types/user.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';
import { formatToLocaleDateString } from '@/utils/getDate';

const projectApi = createApi({
	reducerPath: 'projectApi',
	tagTypes: ['Projects'],
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getJoinedProjects: build.query<Array<Project>, void>({
			query() {
				return { url: '/projects', method: 'get' };
			},
			providesTags: ['Projects'],
		}),
		getCurrentProject: build.query<Project, string>({
			query(id) {
				return { url: `/projects/${id}`, method: 'get' };
			},

			providesTags: ['Projects'],
		}),
		createProject: build.mutation<Project, Omit<Project, '_id'>>({
			query(payload) {
				return { url: '/projects', method: 'post', data: payload };
			},
			invalidatesTags: ['Projects'],
		}),
		updateProjects: build.mutation<Project, { id: string; data: Partial<Project> }>({
			query(payload) {
				return { url: `/projects/${payload.id}`, method: 'patch', data: payload.data };
			},
			invalidatesTags: ['Projects'],
		}),
		addMember: build.mutation<Project, { id: string; member: Pick<IUser, '_id'> }>({
			query(payload) {
				return { url: `/projects/${payload.id}`, data: payload.member, method: 'patch' };
			},
			invalidatesTags: ['Projects'],
		}),
		deleteProject: build.mutation<Project | void, string>({
			query(id) {
				return { url: `/projects/${id}`, method: 'delete' };
			},
			invalidatesTags: ['Projects'],
		}),
	}),
});

export const {
	useGetJoinedProjectsQuery,
	useGetCurrentProjectQuery,
	useCreateProjectMutation,
	useUpdateProjectsMutation,
	useAddMemberMutation,
	useDeleteProjectMutation,
} = projectApi;

export default projectApi;
