import Avatar from '@/components/@tailwind/Avatar';
import Button from '@/components/@tailwind/Button';
import Collapse from '@/components/@tailwind/Collapse';
import Tooltip from '@/components/@tailwind/Tooltip';
import { useAppDispatch } from '@/redux/reduxHook';
import { setCurrentTask } from '@/redux/slices/taskSlice';
import { Task } from '@/types/task.type';
import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BsPencil, BsTrash } from 'react-icons/bs';

const TaskItem = ({ task, index }: { task: Task; index: number }) => {
	const dispatch = useAppDispatch();

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
							tw={`bg-base-100 py-3 px-2 rounded-lg duration-500 ${
								snapshot.isDragging && 'shadow-2xl bg-primary drop-shadow-[0_0_0.5rem_#661ae6]'
							}`}>
							<table className='table text-sm'>
								<tr>
									<th>Creator</th>
									<td>
										<div className='flex items-center gap-2'>
											<Avatar size='xs'>
												<img src={task.creator.picture} alt='avatar' />
											</Avatar>
											<span className='truncate'>{task.creator?.displayName}</span>
										</div>
									</td>
								</tr>
								<tr>
									<th>Description</th>
									<td>{task?.description}</td>
								</tr>
								<tr>
									<th>Started At</th>
									<td>{new Date(task.startedAt)?.toLocaleDateString()}</td>
								</tr>
								<tr>
									<th>Deadline</th>
									<td>{new Date(task.deadline).toLocaleDateString()}</td>
								</tr>
								<tr>
									<th>Assignee</th>
									<td>
										<div className='flex w-fit items-center gap-2'>
											<Avatar size='xs'>
												<img src={task.assignee?.picture} alt='' />
											</Avatar>
											<span className='truncate'>{task.assignee?.displayName}</span>
										</div>
									</td>
								</tr>
							</table>
							<div className='flex items-center justify-end gap-2'>
								<Tooltip position='left' data-tip='Edit'>
									<label
										htmlFor='update-task-form'
										className='btn-ghost btn-sm btn-square btn'
										onClick={() => dispatch(setCurrentTask(task))}>
										<BsPencil />
									</label>
								</Tooltip>
								<Tooltip position='left' data-tip='Delete'>
									<Button color='ghost' size='sm' shape='square'>
										<BsTrash className='text-error' />
									</Button>
								</Tooltip>
							</div>
						</Collapse>
					</div>
				);
			}}
		</Draggable>
	);
};

export default memo(TaskItem);
