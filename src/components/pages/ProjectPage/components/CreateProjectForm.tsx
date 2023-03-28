import Button from '@/components/@tailwind/Button';
import { TextFieldControl } from '@/components/@tailwind/FormControls';
import { useCreateProjectMutation } from '@/redux/apis/projectApi';
import { getCurrentDate } from '@/utils/getDate';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const CreateProjectForm = (props: Props) => {
	const { control, handleSubmit } = useForm();
	const [createProject, status] = useCreateProjectMutation();

	const onHandleSubmit = async (data: any) => {
		const newProject = await createProject(data);
		console.log(newProject);
	};

	return (
		<Fragment>
			<input type='checkbox' id='create-project-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='create-project-modal' className='btn-sm btn-circle btn absolute right-2 top-2'>
						✕
					</label>
					<h3 className='mb-6 text-lg font-bold'>Create new project</h3>
					<form className='flex flex-col gap-6' onSubmit={handleSubmit(onHandleSubmit)}>
						<TextFieldControl
							control={control}
							name='projectName'
							label={`Project's name`}
							rules={{
								required: { value: true, message: 'Project name must be provided!' },
								minLength: { value: 6, message: 'Project name must have at least 6 characters' },
							}}
							type='text'
						/>
						<TextFieldControl
							control={control}
							name='startedAt'
							label='Start at'
							type='date'
							min={getCurrentDate()}
							rules={{ required: { value: true, message: 'Starting date must be provided!' } }}
						/>
						<TextFieldControl
							control={control}
							name='estimatedCompleteDate'
							label={`Estimate to complete at`}
							type='date'
							min={getCurrentDate()}
							rules={{ required: { value: true, message: 'Estimate complete date must be provided!' } }}
						/>
						<Button
							type='submit'
							className='normal-case'
							isLoading={status.isLoading}
							disabled={status.isLoading}>
							Save
						</Button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default CreateProjectForm;
