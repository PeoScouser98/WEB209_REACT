// #region imports
import { STATUS } from '@/constants/task.const';
import { useGetTasksByProjectQuery, useUpdateTaskMutation } from '@/redux/apis/taskApi';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import TaskItem from './TaskItem';
import { useState, useMemo, useEffect } from 'react';
import { Task } from '@/types/task.type';
import instance from '@/utils/axios';
import { setTimeout } from 'timers/promises';
import { Result } from 'postcss';
import { tasks } from '@/mocks/tasks';

// #endregion

// #region tailwind styled components
const Container = tw.div`flex items-start justify-between gap-3 p-3`;
const List = tw.div`flex flex-col gap-3`;
const ColumnContent = tw.div`min-h-[3rem]`;
const Column = tw.div`bg-base-200 p-2 rounded-lg basis-1/3 flex flex-col gap-6`;
// #endregion

const TaskList = () => {
	const { id: projectId } = useParams();
	const { data } = useGetTasksByProjectQuery(projectId!);
	const [updateTask] = useUpdateTaskMutation();
	const [taskList, setTaskList] = useState<Array<Task>>(data!);

	useEffect(() => {
		setTaskList(data!);
	}, [data]);

	const handleOnDragEnd = async (result: DropResult) => {
		if (!result.destination) return;
		if (result.destination.droppableId !== result.source.droppableId) {
			setTaskList((prev: Array<Task>) => {
				return prev.map((task) =>
					task._id === result.draggableId ? { ...task, status: result.destination?.droppableId! } : task
				);
			});

			await updateTask({
				id: result.draggableId,
				data: { status: result.destination?.droppableId! },
				params: { projectId: projectId! },
			});
		} else {
			const [reorderedTask] = taskList!.splice(result.source.index, 1);
			setTaskList(taskList!.splice(result.destination.index, 0, reorderedTask));
		}
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
					<Column>
						<span className={`badge badge-lg capitalize ${columnStyle(status.value)}`}>{status.title}</span>
						<Droppable droppableId={status.value} key={index}>
							{(provided) => {
								return (
									<ColumnContent ref={provided.innerRef} key={index} {...provided.droppableProps}>
										<List>
											{Array.isArray(taskList) &&
												taskList
													.filter((task) => task.status === status.value)
													.map((task, index) => <TaskItem key={task._id} task={task} index={index} />)}
										</List>
										{provided.placeholder}
									</ColumnContent>
								);
							}}
						</Droppable>
					</Column>
				))}
			</Container>
		</DragDropContext>
	);
};

export default TaskList;
