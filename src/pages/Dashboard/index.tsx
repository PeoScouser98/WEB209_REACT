import { useGetActivityLogsQuery } from '@/redux/apis/activityApi';
import { BsBell } from 'react-icons/bs';
import LogLists from './components/LogLists';
import ProjectTable from './components/ProjectTable';
import Typography from '@/components/@tailwind/Typography';

type Props = {};

const Dashboard = (props: Props) => {
	const { data: activitiesLog } = useGetActivityLogsQuery(undefined, { refetchOnMountOrArgChange: true });
	console.log(activitiesLog);

	return (
		<div className='grid h-full grid-cols-[2.5fr,0.1fr,1fr]'>
			<section className='mx-auto w-full gap-6 py-4'>
				<div>
					<h3 className='mb-4 text-lg font-medium text-white'>Your projects</h3>
					<ProjectTable />
				</div>
			</section>
			<div className='divider divider-horizontal'></div>
			<section className='py-4'>
				<Typography
					size='md'
					color=''
					className='mb-6 inline-flex items-center gap-2 text-lg font-medium text-white'>
					<BsBell /> Current Activities
				</Typography>
				<LogLists />
			</section>
		</div>
	);
};

export default Dashboard;
