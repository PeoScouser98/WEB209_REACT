import React, { useRef } from 'react';
type Props = {};
import { projects } from '@/mocks/projects';
import { Project } from '@/types/project.type';
import { Dropdown, DropdownContent } from '@/components/@tailwind/Dropdown';
import { Menu, MenuItem } from '@/components/@tailwind/Menu';
import Button from '@/components/@tailwind/Button';
import { BsPlus, BsSearch, BsThreeDots } from 'react-icons/bs';
import Avatar from '@/components/@tailwind/Avatar';
import { ProjectActions, setProjectFormAction } from '@/redux/slices/projectSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/redux/reduxHook';

const ProjectInfo = ({ currentProject }: { currentProject: Project }) => {
	const searchRef = useRef(null);
	const dispatch = useAppDispatch();

	return (
		<div className='flex items-center justify-between p-3'>
			<div>
				<h3 className='mb-3 text-2xl font-medium'>{currentProject?.projectName}</h3>
				<Dropdown>
					<Button tabIndex={0} color='ghost' size='sm' shape='square'>
						<BsThreeDots />
					</Button>
					<DropdownContent tabIndex={0}>
						<Menu className='min-w-[10rem] bg-base-300'>
							<MenuItem onClick={() => dispatch(setProjectFormAction(ProjectActions.edit))}>
								<label htmlFor='project-modal'>Edit</label>
							</MenuItem>
							<MenuItem>
								<label>Delete</label>
							</MenuItem>
						</Menu>
					</DropdownContent>
				</Dropdown>
			</div>

			<div className='flex flex-col items-end gap-6'>
				<div className='avatar-group -space-x-6'>
					{Array.isArray(currentProject.members) &&
						currentProject.members.map((member) => (
							<Avatar size='sm'>
								<img src={member.info.picture} alt='avatar' />
							</Avatar>
						))}
				</div>
				<Dropdown position='left'>
					<Button tabIndex={0} color='ghost' size='sm' className='normal-case'>
						<BsPlus /> Add member
					</Button>
					<DropdownContent tabIndex={0}>
						<div className='relative px-2'>
							<BsSearch className='absolute top-1/2 -translate-y-1/2 translate-x-2' />
							<input
								type='text'
								className='input-bordered input input-sm pl-8'
								ref={searchRef}
								placeholder='Search...'
							/>
						</div>
					</DropdownContent>
				</Dropdown>
			</div>
		</div>
	);
};

export default ProjectInfo;
