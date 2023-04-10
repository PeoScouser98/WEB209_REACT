import Button from '@/components/@tailwind/Button';
import { useAppSelector } from '@/redux/reduxHook';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

type Props = {};

const ProjectTable = (props: Props) => {
	const joinedProjects = useAppSelector((state) => state.project?.joinedProjects);

	return (
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
								<BsArrowLeftShort className='text-lg' />
							</Button>
							<Button shape='square' size='sm' className='hover:btn-active'>
								<BsArrowRightShort className='text-lg' />
							</Button>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ProjectTable;
