import { Link, NavLink, useLocation } from 'react-router-dom';
import { BiHome, BiFolder, BiMoon, BiPlus, BiDoorOpen } from 'react-icons/bi';
import { BsPerson, BsThreeDots } from 'react-icons/bs';
import React from 'react';
import { Menu, MenuItem } from '../@tailwind/Menu';
import Collapse from '../@tailwind/Collapse';
import { useAppSelector } from '@/redux/reduxHook';
import Avatar from '../@tailwind/Avatar';
import Button from '../@tailwind/Button';
import Tooltip from '../@tailwind/Tooltip';
import { Dropdown, DropdownContent } from '../@tailwind/Dropdown';
import Typography from '../@tailwind/Typography';

const Sidebar = () => {
	const { user } = useAppSelector((state) => state.auth);
	const location = useLocation();

	return (
		<div className='drawer-side min-w-[320px] bg-base-200'>
			<label htmlFor='my-drawer-2' className='drawer-overlay'></label>

			<div className='flex flex-col gap-2 p-3'>
				<div className='flex items-center gap-2'>
					<Avatar size='sm'>
						<img src={user?.picture} alt='avatar' />
					</Avatar>
					<span className='badge'>{user?.displayName}</span>
				</div>

				<div className='divider'></div>

				<h3 className='text-lg'>Main</h3>
				<Menu className=''>
					<MenuItem>
						<Link to='/'>Dashboard</Link>
					</MenuItem>
					<MenuItem className='w-full'>
						<label>
							<Collapse
								title={
									<>
										<BiFolder /> Projects
									</>
								}
								tw='w-full'>
								<Menu>
									<MenuItem>
										<label>
											<BiPlus /> Create new project
										</label>
									</MenuItem>
									<MenuItem>
										<Link to={`/projects/1`}>Project 1</Link>
									</MenuItem>
								</Menu>
							</Collapse>
						</label>
					</MenuItem>
					{location.pathname.includes('/projects') && (
						<MenuItem className='hidden sm:flex'>
							<label>
								<BiPlus /> Create task
							</label>
						</MenuItem>
					)}
				</Menu>

				<h3 className='text-lg'>User</h3>
				<Menu>
					<MenuItem>
						<label>
							<BsPerson /> Profile
						</label>
						<label>
							<BiDoorOpen /> Sign out
						</label>
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default Sidebar;
