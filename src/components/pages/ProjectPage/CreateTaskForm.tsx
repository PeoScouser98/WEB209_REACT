import Button from '@/components/@tailwind/Button';
import { TextFieldControl } from '@/components/@tailwind/FormControls';
import Input from 'postcss/lib/input';
import React from 'react';

import { useForm, Controller } from 'react-hook-form';
type Props = {};

const CreateTaskForm = (props: Props) => {
	const { handleSubmit, control } = useForm();

	return (
		<form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col items-stretch gap-6'>
			<TextFieldControl
				type='text'
				control={control}
				className=''
				name='taskName'
				label='Task name'
				rules={{
					required: 'Task name must be provided',
				}}
			/>
			<TextFieldControl
				type='date'
				control={control}
				className=''
				name='startAt'
				label='Start at'
				rules={{
					required: 'Start time must be provided!',
				}}
			/>

			<Button type='submit'>Save</Button>
		</form>
	);
};

export default CreateTaskForm;
