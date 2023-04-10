import React from 'react';
import Loading from '../@tailwind/Loading';
import { BsGrid3X3Gap, BsGrid3X3GapFill } from 'react-icons/bs';

const PageLoading = () => {
	return (
		<div className='flex w-full items-center justify-center p-10'>
			<Loading/>
		</div>
	);
};

export default PageLoading;
