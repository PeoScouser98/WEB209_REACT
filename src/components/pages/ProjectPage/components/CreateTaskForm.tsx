import Button from '@/components/@tailwind/Button';
import { LongTextFieldControl, SelectFieldControl, TextFieldControl } from '@/components/@tailwind/FormControls';
import { useCreateTaskMutation } from '@/redux/apis/taskApi';
import { Task } from '@/types/task.type';
import { Member } from '@/types/user.type';
import instance from '@/utils/axios';
import { getCurrentDate } from '@/utils/getDate';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const CreateTaskForm = ({ members, task }: { members: Array<Member>; task?: Task }) => {
	const { handleSubmit, control, reset } = useForm();
	const [createTask] = useCreateTaskMutation();
	const { id } = useParams();

	useEffect(() => {
		if (task) {
			reset(task);
		}
	}, [task]);

	const handleOnSubmit = async (data: any) => {
		console.log(data);
		const newTask = await createTask({ projectId: id!, newTask: { project: id!, ...data } });
		console.log(newTask);
	};

	return (
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
			<Button type='submit'>Save</Button>
		</form>
	);
};

export default CreateTaskForm;
