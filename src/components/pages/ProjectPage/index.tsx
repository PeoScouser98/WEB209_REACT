import { useGetCurrentProjectQuery } from '@/redux/apis/projectApi';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHook';
import { setCurrentProject } from '@/redux/slices/projectSlice';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import CreateTaskForm from './components/CreateTaskForm';
import ProjectInfo from './components/ProjectInfo';
import TaskList from './components/TaskList';

const ProjectPage = () => {
	const { id } = useParams();
	console.log(id);
	const { data: currentProject } = useGetCurrentProjectQuery(id!);
	const dispatch = useAppDispatch();

	// dispatch(setCurrentProject(currentProject));
	return (
		<Fragment>
			<div className='grid h-full grid-cols-[3fr,1fr]'>
				<div>
					<ProjectInfo currentProject={currentProject!} />
					<TaskList />
				</div>
				<div className='h-full bg-base-200 p-4'>
					<h3 className='mb-6 text-2xl font-medium'>Add new task</h3>
					<CreateTaskForm members={currentProject?.members!} />
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectPage;
