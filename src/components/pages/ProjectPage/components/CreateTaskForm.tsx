import Button from '@/components/@tailwind/Button';
import { LongTextFieldControl, SelectFieldControl, TextFieldControl } from '@/components/@tailwind/FormControls';
import { getCurrentDate } from '@/utils/getDate';
import Input from 'postcss/lib/input';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { availableAssignees } from '@/mocks/users';

const CreateTaskForm = () => {
	const { handleSubmit, control } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data) => console.log(data))}
			className='scroll flex min-w-full flex-col items-stretch gap-6 overflow-y-auto'>
			<TextFieldControl
				type='text'
				control={control}
				name='taskName'
				placeholder='Some task name'
				label='Task name'
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
				rules={{
					required: 'Start time must be provided!',
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
				render={() => availableAssignees.map((member) => <option value={member._id}>{member.displayName}</option>)}
			/>
			<Button type='submit'>Save</Button>
		</form>
	);
};

export default CreateTaskForm;
