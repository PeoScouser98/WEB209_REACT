import Typography from '@/components/@tailwind/Typography';
import { useAppSelector } from '@/redux/reduxHook';
import React from 'react';

type Props = {};

const ProfilePage = (props: Props) => {
	const user = useAppSelector((state) => state.auth?.user);
	const joinedProjects = useAppSelector((state) => state.project?.joinedProjects);
	return (
		<div className='flex flex-col gap-6'>
			<img src={user?.picture} alt='' />
			<h3 className='text-2xl font-medium text-white'>{user?.displayName}</h3>
			<h4 className='text-xl'>{user?.email}</h4>
			<div className='divider'></div>p
		</div>
	);
};

export default ProfilePage;
