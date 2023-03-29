import { Project } from '@/types/project.type';
import { createSlice } from '@reduxjs/toolkit';
import projectApi from '../apis/projectApi';

export enum ProjectActions {
	create = 'CREATE',
	edit = 'EDIT',
}

type InitialState = {
	currentProject: Project | null;
	formAction: ProjectActions;
};

const initialState: InitialState = {
	currentProject: null,
	formAction: ProjectActions.create,
};

const projectSlice = createSlice({
	name: 'project',
	initialState: initialState,
	reducers: {
		setCurrentProject(state, { payload }) {
			state.currentProject = payload;
		},
		setProjectFormAction(state, { payload }: { payload: ProjectActions }) {
			state.formAction = payload;
		},
	},
});
export const { setCurrentProject, setProjectFormAction } = projectSlice.actions;
export default projectSlice;
