import Button from '@/components/@tailwind/Button';
import Tooltip from '@/components/@tailwind/Tooltip';
import { useGetActivityLogsQuery } from '@/redux/apis/activityApi';
import { useAppSelector } from '@/redux/reduxHook';
import React from 'react';
import { BsArrowLeft, BsArrowRight, BsBell } from 'react-icons/bs';
import LogItem from './components/LogItem';

type Props = {};

const Dashboard = (props: Props) => {
	const { data: activitiesLog } = useGetActivityLogsQuery(undefined, { refetchOnMountOrArgChange: true });
	const joinedProjects = useAppSelector((state) => state.project?.joinedProjects);
	console.log(activitiesLog);

	return (
		<div className='grid h-full grid-cols-[2fr,1fr]'>
			<section className='p-4'>
				<h3 className='mb-4 text-lg font-medium text-white'>Your projects</h3>
				<table className='table w-full'>
					<thead className=''>
						<tr>
							<th>#</th>
							<th>Project's name</th>
							<th>Team size</th>
							<th>All tasks</th>
							<th>Completed tasks</th>
							<th>Incomplete tasks</th>
						</tr>
					</thead>
					<tbody>
						{Array.isArray(joinedProjects) &&
							joinedProjects.map((project, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>
										<div className='scroll w-[14rem] overflow-x-scroll py-2'>
											<b>{project.projectName}</b>
										</div>
									</td>
									<td>{project.members?.length}</td>
									<td>{}</td>
									<td>{}</td>
									<td>{}</td>
								</tr>
							))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={6}>
								<div className='btn-group w-full justify-end'>
									<Button shape='square' size='sm' className='hover:btn-active'>
										<BsArrowLeft />
									</Button>
									<Button shape='square' size='sm' className='hover:btn-active'>
										<BsArrowRight />
									</Button>
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</section>
			<section className='border-l border-base-content/20 p-4'>
				<h3 className='mb-6 inline-flex items-center gap-2 text-lg font-medium text-white'>
					<BsBell /> Current Activities
				</h3>
				<div className='flex flex-col gap-6'>
					<LogItem />
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
