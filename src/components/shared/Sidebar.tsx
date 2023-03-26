import { useAppSelector } from '@/redux/reduxHook';
import { BiDoorOpen, BiFolder, BiPlus } from 'react-icons/bi';
import { BsFolder, BsGrid1X2, BsGrid1X2Fill, BsPerson } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../@tailwind/Avatar';
import Collapse from '../@tailwind/Collapse';
import { Menu, MenuItem } from '../@tailwind/Menu';
import Tooltip from '../@tailwind/Tooltip';

const Sidebar = () => {
	const { user } = useAppSelector((state) => state.auth);
	const location = useLocation();

	return (
		<div className='drawer-side min-w-[320px] bg-neutral-focus text-neutral-content'>
			<label htmlFor='my-drawer-2' className='drawer-overlay'></label>

			<div className='flex flex-col gap-2 p-3'>
				<div className='flex items-center gap-2'>
					<Avatar size='sm'>
						<img src={user?.picture} alt='avatar' />
					</Avatar>
					<Tooltip className='tooltip-success' data-tip={user?.email} position='bottom'>
						<span className='badge text-white'>{user?.displayName}</span>
					</Tooltip>
				</div>

				<div className='divider'></div>

				<h3 className='text-lg'>Main</h3>
				<Menu className=''>
					<MenuItem>
						<Link to='/'>
							<BsGrid1X2 /> Dashboard
						</Link>
					</MenuItem>
					<MenuItem className='w-full'>
						<label>
							<Collapse
								title={
									<>
										<BiFolder /> Projects <span className='badge-primary badge'>{3}</span>
									</>
								}
								tw='w-full'>
								<Menu>
									<MenuItem>
										<label className='text-white' htmlFor='create-project-modal'>
											<BiPlus /> Create new project
										</label>
									</MenuItem>
									<MenuItem>
										<Link to={`/projects/1`}>
											<BsFolder /> Project 1
										</Link>
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

				<h3 className='text-lg'>Settings</h3>
				<Menu>
					<MenuItem>
						<label>Theme</label>
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default Sidebar;
