import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList';

type Props = {};

const ProjectPage = (props: Props) => {
	return (
		<div className='grid grid-cols-[3fr,1fr]'>
			<TaskList />
			<CreateTaskForm />
		</div>
	);
};

export default ProjectPage;
