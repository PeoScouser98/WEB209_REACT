import Avatar from '@/components/@tailwind/Avatar';
import React from 'react';
import moment from 'moment';

type Props = {};

const LogItem = (props: Props) => {
	return (
		<div>
			<div className='flex items-center gap-3'>
				<Avatar size='xs'>
					<img src='https://ui-avatars.com/api/?name=John+Doe' alt='' />
				</Avatar>
				<div className='flex flex-col gap-0'>
					<span className='font-medium text-white'>User's name</span>

					<time className='text-xs'>{moment().startOf('day').fromNow()}</time>
				</div>
			</div>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim doloremque voluptates aspernatur
				voluptatibus.
			</p>
		</div>
	);
};

export default LogItem;
