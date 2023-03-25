import Layout from '@/components/layouts';
import Dashboard from '@/components/pages/Dashboard';
import ProjectPage from '@/components/pages/ProjectPage';
import SignIn from '@/components/pages/SignPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path='projects/:id' element={<ProjectPage />} />
				</Route>
				<Route path='/signin' element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
