import Avatar from '@/components/@tailwind/Avatar';
import Button from '@/components/@tailwind/Button';
import Tooltip from '@/components/@tailwind/Tooltip';
import Logo from '@/components/shared/Logo';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHook';
import { ProjectActions, setProjectFormAction } from '@/redux/slices/projectSlice';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import tw from 'tailwind-styled-components';

type Props = {};

const NavWarraper = tw.nav`navbar border-b border-base-content/20 bg-neutral-focus px-4`;
const NavStart = tw.div`navbar-start`;
const NavEnd = tw.div`navbar-end gap-4`;

const Navbar = (props: Props) => {
	const { user } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	return (
		<NavWarraper>
			<NavStart>
				<Logo />
			</NavStart>
			<NavEnd>
				<Tooltip data-tip='Create new project' position='bottom' color='primary'>
					<label
						className='btn-outline btn-square btn-xs btn'
						htmlFor='project-modal'
						onClick={() => dispatch(setProjectFormAction(ProjectActions.CREATE))}>
						<BiPlus className='font-medium' />
					</label>
				</Tooltip>

				<div className='flex items-center gap-2'>
					<Avatar size='xs' online={true}>
						<img src={user?.picture} alt='avatar' />
					</Avatar>
					<small className=' text-white'>{user?.displayName}</small>
				</div>
			</NavEnd>
		</NavWarraper>
	);
};

export default Navbar;
