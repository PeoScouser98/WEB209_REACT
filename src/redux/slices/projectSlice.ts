import { Project } from '@/types/project.type';
import { createSlice } from '@reduxjs/toolkit';
import projectApi from '../apis/projectApi';

export enum ProjectActions {
	CREATE = 'CREATE',
	EDIT = 'EDIT',
}

type InitialState = {
	joinedProjects: Array<Project>;
	currentProject: Project | undefined;
	formAction: ProjectActions;
};

const initialState: InitialState = {
	joinedProjects: [],
	currentProject: undefined,
	formAction: ProjectActions.CREATE,
};

const projectSlice = createSlice({
	name: 'project',
	initialState: initialState,
	reducers: {
		setProjectFormAction(state, { payload }) {
			return { ...state, formAction: payload };
		},
	},
	extraReducers(builder) {
		builder.addMatcher(projectApi.endpoints.getJoinedProjects.matchFulfilled, (state, { payload }) => {
			state.joinedProjects = payload;
		});
		builder.addMatcher(projectApi.endpoints.getCurrentProject.matchFulfilled, (state, { payload }) => {
			state.currentProject = payload;
		});
	},
});
export const { setProjectFormAction } = projectSlice.actions;
export default projectSlice;
