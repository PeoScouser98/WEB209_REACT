import Avatar from '@/components/@tailwind/Avatar';
import Button from '@/components/@tailwind/Button';
import StyledButton from '@/components/@tailwind/Button';
import { Dropdown, DropdownContent } from '@/components/@tailwind/Dropdown';
import { Menu, MenuItem } from '@/components/@tailwind/Menu';
import Tooltip from '@/components/@tailwind/Tooltip';
import { useAppDispatch } from '@/redux/reduxHook';
import { ProjectActions, setProjectFormAction } from '@/redux/slices/projectSlice';
import { Project } from '@/types/project.type';
import { BsPencil, BsPlus, BsThreeDots, BsTrash } from 'react-icons/bs';

const ProjectInfo = ({ currentProject }: { currentProject: Project }) => {
	const dispatch = useAppDispatch();

	return (
		<div className='flex flex-grow items-center justify-between p-3 '>
			<div className='flex basis-1/2 flex-col'>
				<h3 className='text-break mb-3 text-xl font-medium'>{currentProject?.projectName}</h3>

				<Dropdown>
					<StyledButton tabIndex={0} color='ghost' size='sm' shape='square'>
						<BsThreeDots />
					</StyledButton>
					<DropdownContent tabIndex={0}>
						<Menu className='min-w-[10rem] bg-base-300'>
							<MenuItem onClick={() => dispatch(setProjectFormAction(ProjectActions.EDIT))}>
								<label htmlFor='project-modal'>
									<BsPencil /> Edit
								</label>
							</MenuItem>
							<MenuItem>
								<label className='text-error'>
									<BsTrash /> Delete
								</label>
							</MenuItem>
						</Menu>
					</DropdownContent>
				</Dropdown>
			</div>

			<div className='flex flex-col items-end gap-2'>
				<div className='avatar-group -space-x-4'>
					{Array.isArray(currentProject?.members) &&
						currentProject.members.map((member) => (
							<Avatar size='xxs'>
								<img src={member.info.picture} alt='avatar' />
							</Avatar>
						))}
				</div>
				<Button color='ghost' size='sm'>
					<label htmlFor='search-user-modal' className='inline-flex items-center gap-2 normal-case'>
						<BsPlus /> Add member
					</label>
				</Button>
			</div>
		</div>
	);
};

export default ProjectInfo;
