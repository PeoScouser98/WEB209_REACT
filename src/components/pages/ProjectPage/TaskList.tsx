// #region imports
import { Task } from '@/types/task.type';
import { Fragment } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import tw from 'tailwind-styled-components';
import TaskItem from './TaskItem';
import { STATUS } from '@/constants/taskStatus.const';
import { useState, useEffect } from 'react';

// #endregion

// #region tailwind styled components
const Container = tw.div`flex items-start justify-between gap-3 p-3`;
const List = tw.div`flex flex-col gap-3`;
const Column = tw.div`bg-base-200 p-2 rounded-lg basis-1/3 min-h-[7rem] flex flex-col gap-6`;
// #endregion

const TaskList = ({ taskList }: { taskList: Array<Task> }) => {
	// const [tasks, setTasks] = useState<Task[]>(taskList);
	const handleOnDragEnd = async (result: DropResult) => {
		console.log(result);
		if (!result.destination) {
			return;
		}

		taskList = taskList.map((task) => {
			console.log('', result.draggableId);
			return task._id === result.draggableId ? { ...task, status: result.destination?.droppableId! } : task;
		});
		// console.log(updatedTaskList);
		// setTasks(updatedTaskList);
	};
	const columnStyle = (status: string) => {
		switch (status) {
			case 'TODO':
				return '';
			case 'IN_PROGRESS':
				return 'badge-warning';
			case 'COMPLETED':
				return 'badge-success';
		}
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Container>
				{STATUS.map((status, index) => (
					<Droppable droppableId={status.value} key={index}>
						{(provided) => {
							return (
								<Column ref={provided.innerRef} key={index} {...provided.droppableProps}>
									<span className={`badge badge-lg capitalize ${columnStyle(status.value)}`}>
										{status.title}
									</span>

									<List>
										{taskList
											.filter((task, index) => task.status === status.value)
											.map((task, index) => (
												<TaskItem key={task._id} task={task} index={index} />
											))}
										{/* {provided.placeholder} */}
									</List>
								</Column>
							);
						}}
					</Droppable>
				))}
			</Container>
		</DragDropContext>
	);
};

export default TaskList;
