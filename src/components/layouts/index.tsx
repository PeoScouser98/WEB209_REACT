import Sidebar from '@/components/shared/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ProjectFormModal from '../pages/ProjectPage/components/ProjectFormModal';
import EditTaskModal from '../pages/ProjectPage/components/EditTaskForm';
import PageLoading from '../shared/PageLoading';

const Layout = () => {
	return (
		<div className='drawer-mobile drawer' data-theme='dark'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content h-screen bg-neutral'>
				<Suspense fallback={<PageLoading />}>
					<Outlet />
				</Suspense>
			</div>
			<Sidebar />
			<ProjectFormModal />
			<EditTaskModal />
		</div>
	);
};

export default Layout;
