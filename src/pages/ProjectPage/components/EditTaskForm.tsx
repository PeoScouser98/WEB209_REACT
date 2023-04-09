import StyledButton from '@/components/@tailwind/Button';
import { LongTextFieldControl, SelectFieldControl, TextFieldControl } from '@/components/@tailwind/FormControls';
import { Priority } from '@/constants/task.const';
import { useUpdateTaskMutation } from '@/redux/apis/taskApi';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHook';
import { setCurrentTask } from '@/redux/slices/taskSlice';
import { Task } from '@/types/task.type';
import { formatToLocaleDateString, getCurrentDate } from '@/utils/getDate';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const EditTaskModal = () => {
	const { handleSubmit, control, reset } = useForm();
	const currentProject = useAppSelector((state) => state.project.currentProject);
	const { currentTask } = useAppSelector((state) => state.task);
	const [updateTask] = useUpdateTaskMutation();
	const dispatch = useAppDispatch();
	useEffect(() => {
		reset({
			title: currentTask?.title,
			startedAt: formatToLocaleDateString(currentTask?.startedAt!),
			deadline: formatToLocaleDateString(currentTask?.deadline!),
			description: currentTask?.description,
			assignee: currentTask?.assignee._id!,
		});
	}, [currentTask]);

	const handleOnSubmit = async (data: Partial<Task>) => {
		await updateTask({ id: currentTask?._id!, data: data, params: { projectId: currentProject!._id } });
		dispatch(setCurrentTask(null));
		alert('updated task!');
		reset();
	};
	return (
		<>
			<input type='checkbox' id='update-task-form' className='modal-toggle' />
			<div className='modal'>
				<div className='scroll modal-box relative'>
					<label htmlFor='update-task-form' className='btn-sm btn-circle btn absolute right-2 top-2'>
						✕
					</label>
					<h3 className='mb-6 text-lg font-bold'>Edit Task</h3>
					<form
						onSubmit={handleSubmit(handleOnSubmit)}
						className='scroll flex min-w-full flex-col items-stretch gap-6 overflow-y-auto'>
						<TextFieldControl
							type='text'
							control={control}
							name='title'
							placeholder='Some task name'
							label='Title'
							rules={{
								required: 'Task name must be provided',
							}}
						/>
						<LongTextFieldControl
							type='text'
							longtext={true}
							control={control}
							name='description'
							label='Description'
							rules={{
								required: 'Task name must be provided',
							}}
						/>

						<TextFieldControl
							type='date'
							control={control}
							name='startedAt'
							disabled={true}
							label='Start at'
							rules={{
								required: 'Start time must be provided!',
							}}
						/>
						<TextFieldControl
							type='date'
							control={control}
							name='deadline'
							label='Deadline'
							min={getCurrentDate()}
							rules={{
								required: 'Deadline must be provided!',
							}}
						/>
						<SelectFieldControl
							label='Assignee'
							control={control}
							name='assignee'
							render={() => {
								return (
									Array.isArray(currentProject?.members) &&
									currentProject?.members.map((member) => (
										<option selected={member.info._id === currentTask?.assignee._id} value={member.info._id}>
											{member.info.displayName}
										</option>
									))
								);
							}}
						/>
						<SelectFieldControl
							label='Priority'
							control={control}
							name='priority'
							render={() => {
								return Object.values(Priority).map((priority) => <option value={priority}>{priority}</option>);
							}}
						/>
						<StyledButton type='submit'>Save</StyledButton>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditTaskModal;
