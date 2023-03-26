import { projects } from '@/mocks/projects';
import { Fragment } from 'react';
import CreateTaskForm from './components/CreateTaskForm';
import ProjectInfo from './components/ProjectInfo';
import TaskList from './components/TaskList';
import './style/index.css';

type Props = {};

const ProjectPage = (props: Props) => {
	const [currentProject] = projects;

	return (
		<Fragment>
			<div className='grid h-full grid-cols-[3fr,1fr]'>
				<div>
					<ProjectInfo currentProject={currentProject} />
					<TaskList taskList={currentProject.tasks!} />
				</div>
				<div className='h-full bg-base-200 p-4'>
					<h3 className='mb-6 text-2xl font-medium'>Add new task</h3>
					<CreateTaskForm />
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectPage;
