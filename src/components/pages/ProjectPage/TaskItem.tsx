import Avatar from '@/components/@tailwind/Avatar';
import Collapse from '@/components/@tailwind/Collapse';
import { Task } from '@/types/task.type';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index }: { task: Task; index: number }) => {
	return (
		<Draggable draggableId={task._id} index={index}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.dragHandleProps}
						{...provided.draggableProps}
						style={{ ...provided.draggableProps.style }}
						ref={provided.innerRef}>
						<Collapse
							title={task.title}
							tw={`bg-base-100 py-3 px-2 rounded-lg ${
								snapshot.isDragging && 'shadow-2xl bg-primary drop-shadow-[0_0_0.5rem_#661ae6]'
							}`}>
							<table className='table'>
								<tr>
									<th>Creator</th>
									<td>
										<div className='flex items-center gap-2'>
											<Avatar size='sm'>
												<img src={task.creator.picture} alt='avatar' />
											</Avatar>
											<span>{task.creator.displayName}</span>
										</div>
									</td>
								</tr>
								<tr>
									<th>Description</th>
									<td>{task.description}</td>
								</tr>
								<tr>
									<th>Started At</th>
									<td>{task.startedAt.toLocaleString()}</td>
								</tr>
								<tr>
									<th>Deadline</th>
									<td>{task.deadline.toLocaleString()}</td>
								</tr>
								<tr>
									<th>Assignee</th>
									<td>
										<div className='flex items-center gap-2'>
											<Avatar size='sm'>
												<img src={task.assignee.picture} alt='' />
											</Avatar>
											<span>{task.assignee.displayName}</span>
										</div>
									</td>
								</tr>
							</table>
						</Collapse>
					</div>
				);
			}}
		</Draggable>
	);
};

export default TaskItem;
