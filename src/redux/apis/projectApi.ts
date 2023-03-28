import { Project } from '@/types/project.type';
import { User } from '@/types/user.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

const projectApi = createApi({
	reducerPath: 'projectApi',
	tagTypes: ['Projects'],
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getJoinedProjects: build.query<Array<Project>, void>({
			query() {
				return { url: '/projects', method: 'get' };
			},
			providesTags: [{ type: 'Projects', id: 'PROJECT_LIST' }],
		}),
		getCurrentProject: build.query<Project, string>({
			query(id) {
				return { url: `/projects/${id}`, method: 'get' };
			},
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
		addMember: build.mutation<Project, { id: string; member: Pick<User, '_id'> }>({
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
