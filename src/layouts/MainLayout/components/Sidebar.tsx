import { useSignoutMutation } from '@/redux/apis/authApi';
import { useGetJoinedProjectsQuery } from '@/redux/apis/projectApi';
import { useAppDispatch } from '@/redux/reduxHook';
import { ProjectActions, setProjectFormAction } from '@/redux/slices/projectSlice';
import { Fragment } from 'react';
import { BiDoorOpen, BiFolder, BiPlus } from 'react-icons/bi';
import { BsFolder, BsGrid1X2, BsPerson } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import Collapse from '../../../components/@tailwind/Collapse';
import { Menu, MenuItem } from '../../../components/@tailwind/Menu';

const Sidebar = () => {
	const { data: joinedProjects } = useGetJoinedProjectsQuery(undefined, { refetchOnMountOrArgChange: true });

	console.log(joinedProjects);

	const location = useLocation();
	const [signout] = useSignoutMutation();
	const dispatch = useAppDispatch();

	const handleSignout = async () => {
		await signout();
	};

	return (
		<div className='drawer-side w-[320px] bg-neutral-focus text-neutral-content'>
			<label htmlFor='my-drawer-2' className='drawer-overlay'></label>

			<div className='flex flex-col gap-2 overflow-y-hidden px-3 py-6'>
				<div className='scroll flex flex-col gap-2 overflow-y-auto'>
					<h3 className='text-lg text-white '>Main</h3>
					<Menu>
						<MenuItem>
							<Link to='/'>
								<BsGrid1X2 /> Dashboard
							</Link>
						</MenuItem>
						<MenuItem className='w-full'>
							<label>
								<Collapse
									title={
										<Fragment>
											<BiFolder /> Projects{' '}
											<span className='badge-primary badge'>{joinedProjects!?.length}</span>
										</Fragment>
									}
									tw='w-full'>
									{Array.isArray(joinedProjects) && joinedProjects.length > 0 ? (
										<Menu>
											{joinedProjects?.map((project) => (
												<MenuItem>
													<Link to={`/projects/${project._id}`}>
														<BsFolder /> <span className='w-[10rem] truncate'>{project.projectName}</span>
													</Link>
												</MenuItem>
											))}
										</Menu>
									) : (
										<label className='inline-flex items-center justify-center p-3'>Empty</label>
									)}
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

					<h3 className='text-lg text-white '>User</h3>
					<Menu>
						<MenuItem>
							<label>
								<BsPerson /> Profile
							</label>
						</MenuItem>
						<MenuItem onClick={handleSignout}>
							<label>
								<BiDoorOpen /> Sign out
							</label>
						</MenuItem>
					</Menu>

					<h3 className='text-lg text-white '>Settings</h3>
					<Menu>
						<MenuItem>
							<label>Theme</label>
						</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
