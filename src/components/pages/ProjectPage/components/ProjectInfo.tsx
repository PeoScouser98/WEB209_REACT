import React from 'react';
type Props = {};
import { projects } from '@/mocks/projects';
import { Project } from '@/types/project.type';
import { Dropdown, DropdownContent } from '@/components/@tailwind/Dropdown';
import { Menu, MenuItem } from '@/components/@tailwind/Menu';

const ProjectInfo = ({ currentProject }: { currentProject: Project }) => {
	return (
		<div className='flex items-start justify-between'>
			<div className='flex items-center justify-between p-3'>
				<div>
					<h3 className='mb-3 text-2xl font-medium'>{currentProject?.projectName}</h3>
					<Dropdown>
						<DropdownContent>
							<Menu>
								<MenuItem>
									<label>Edit</label>
								</MenuItem>
								<MenuItem>
									<label>Delete</label>
								</MenuItem>
							</Menu>
						</DropdownContent>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default ProjectInfo;
