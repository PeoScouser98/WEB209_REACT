import Avatar from '@/components/@tailwind/Avatar';
import { useGetActivityLogsQuery } from '@/redux/apis/activityApi';
import { IActivity } from '@/types/activity.type';
import moment from 'moment';
import React from 'react';

const LogItem = ({ activity }: { activity: IActivity }) => {
	return (
		<div>
			<div className='flex items-start gap-3'>
				<Avatar size='xs'>
					<img src={activity.createdBy?.picture} alt='' />
				</Avatar>
				<div className='flex flex-col gap-0'>
					<span className='font-medium text-white'>User's name</span>

					<time className='text-xs'>{moment(activity?.createdAt).startOf('day').fromNow()}</time>
					<p>{activity?.log}</p>
				</div>
			</div>
		</div>
	);
};

const LogLists = () => {
	const { data: activitiesList } = useGetActivityLogsQuery(undefined, { refetchOnMountOrArgChange: true });
	console.log('Activities :>>>>>', activitiesList);

	return (
		<div className='flex flex-col gap-6'>
			{Array.isArray(activitiesList?.docs) &&
				activitiesList?.docs?.map((activity, index) => <LogItem key={index} activity={activity} />)}
		</div>
	);
};

export default LogLists;
