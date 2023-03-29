import { Task } from '@/types/task.type';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	currentTask: Task | null;
};

const initialState: InitialState = {
	currentTask: null,
};

const taskSlice = createSlice({
	name: 'task',
	initialState: initialState,
	reducers: {
		setCurrentTask: (state, { payload }) => {
			state.currentTask = payload;
		},
	},
});

export const { setCurrentTask } = taskSlice.actions;

export default taskSlice;
