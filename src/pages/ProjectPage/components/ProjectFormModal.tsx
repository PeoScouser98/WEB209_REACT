import StyledButton from '@/components/@tailwind/Button';
import { TextFieldControl } from '@/components/@tailwind/FormControls';
import { useCreateProjectMutation, useUpdateProjectsMutation } from '@/redux/apis/projectApi';
import { useAppSelector } from '@/redux/reduxHook';
import { ProjectActions } from '@/redux/slices/projectSlice';
import { formatToLocaleDateString, getCurrentDate } from '@/utils/getDate';
import { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const ProjectFormModal = (props: Props) => {
	const { control, handleSubmit, reset } = useForm();
	const [createProject, status] = useCreateProjectMutation();
	const [editProject] = useUpdateProjectsMutation();
	const { formAction, currentProject } = useAppSelector((state) => state.project);
	const initialFormValue = { projectName: null, estimatedCompletedate: '' };

	useEffect(() => {
		switch (formAction) {
			case ProjectActions.CREATE:
				reset(initialFormValue);
				break;

			case ProjectActions.EDIT:
				reset(currentProject);
				break;
		}
	}, [formAction, currentProject]);

	const handleCreateOrEditProject = async (data: any) => {
		try {
			switch (formAction) {
				case ProjectActions.CREATE:
					await createProject(data);
					alert('Create new project!');
					break;
				case ProjectActions.EDIT:
					await editProject({ id: currentProject?._id!, data: data });
					alert('Updated project');
					break;
			}
		} catch (error) {}
	};

	return (
		<Fragment>
			<input type='checkbox' id='project-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='project-modal' className='btn-sm btn-circle btn absolute right-2 top-2'>
						✕
					</label>
					<h3 className='mb-6 text-lg font-bold lowercase first-letter:uppercase'>{formAction} project</h3>
					<form className='flex flex-col gap-6' onSubmit={handleSubmit(handleCreateOrEditProject)}>
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
							name='estimatedCompleteDate'
							label={`Estimate to complete at`}
							type='date'
							min={getCurrentDate()}
							rules={{ required: { value: true, message: 'Estimate complete date must be provided!' } }}
						/>
						<StyledButton type='submit' className='normal-case' isLoading={status.isLoading} disabled={status.isLoading}>
							Save
						</StyledButton>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectFormModal;
