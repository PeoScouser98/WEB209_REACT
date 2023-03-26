import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';
import CreateProjectForm from '../pages/ProjectPage/CreateProjectForm';

const Layout = () => {
	return (
		<div className='drawer-mobile drawer' data-theme='dark'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content h-screen bg-neutral'>
				<Outlet />
			</div>
			<Sidebar />
			<CreateProjectForm />
		</div>
	);
};

export default Layout;
