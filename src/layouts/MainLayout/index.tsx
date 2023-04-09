import PageLoading from '@/components/shared/PageLoading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Navbar from './components/Navbar';
import tw from 'tailwind-styled-components';
import ProjectFormModal from '@/pages/ProjectPage/components/ProjectFormModal';
import EditTaskModal from '@/pages/ProjectPage/components/EditTaskForm';
import FindUserModal from '@/pages/ProjectPage/components/FindUserModal';

const Screen = tw.div`flex flex-col h-screen`;
const Main = tw.div`drawer-mobile drawer`;
const DrawerToggle = tw.input`drawer-toggle`;
const OutletWrapper = tw.div`scroll drawer-content flex h-screen flex-col bg-neutral`;
const Layout = () => {
	return (
		<Screen>
			<Navbar />
			<Main data-theme='dark'>
				<DrawerToggle id='my-drawer-2' type='checkbox' />
				<OutletWrapper>
					<Suspense fallback={<PageLoading />}>
						<Outlet />
					</Suspense>
				</OutletWrapper>
				<Sidebar />

				<ProjectFormModal />
				<EditTaskModal />
				<FindUserModal />
			</Main>
		</Screen>
	);
};

export default Layout;
