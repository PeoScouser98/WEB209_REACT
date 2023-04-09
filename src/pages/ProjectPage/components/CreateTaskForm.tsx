import Button from '@/components/@tailwind/Button';
import { LongTextFieldControl, SelectFieldControl, TextFieldControl } from '@/components/@tailwind/FormControls';
import { Priority } from '@/constants/task.const';
import { useCreateActivityLogMutation } from '@/redux/apis/activityApi';
import { useCreateTaskMutation } from '@/redux/apis/taskApi';
import { useAppSelector } from '@/redux/reduxHook';
import { Task } from '@/types/task.type';
import { Member } from '@/types/user.type';
import { getCurrentDate } from '@/utils/getDate';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const CreateTaskForm = ({ members, task }: { members: Array<Member>; task?: Task }) => {
	const { handleSubmit, control, reset } = useForm();
	const [createTask] = useCreateTaskMutation();
	const [createLog] = useCreateActivityLogMutation();
	const user = useAppSelector((state) => state.auth?.user);
	const { id } = useParams();

	useEffect(() => {
		if (task) {
			reset(task);
		}
	}, [task]);

	const handleOnSubmit = async (data: any) => {
		const [newTask, newLog] = await Promise.all([
			createTask({ projectId: id!, newTask: { project: id!, ...data } }),
			createLog({ log: `Create new task` }),
		]);
		console.log([newTask, newLog]);
	};

	return (
		<form onSubmit={handleSubmit(handleOnSubmit)} className='flex min-w-full flex-col items-stretch gap-6'>
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
				name='startAt'
				label='Start at'
				min={getCurrentDate()}
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
					console.log(members);
					return (
						Array.isArray(members) &&
						members.map((member) => <option value={member.info._id}>{member.info.displayName}</option>)
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
			<Button type='submit' className='capitalize'>
				Save
			</Button>
		</form>
	);
};

export default CreateTaskForm;
