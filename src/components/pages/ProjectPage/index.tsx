import { Dropdown, DropdownContent } from '@/components/@tailwind/Dropdown';
import { Menu, MenuItem } from '@/components/@tailwind/Menu';
import { projects } from '@/mocks/projects';
import React, { Fragment } from 'react';
import CreateTaskForm from './CreateTaskForm';
import ProjectInfo from './ProjectInfo';
import TaskList from './TaskList';
import { useState } from 'react';
import { Task } from '@/types/task.type';
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
