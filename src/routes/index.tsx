import Loading from '@/components/@tailwind/Loading';
import Layout from '@/components/layouts';
import PrivateLayout from '@/components/layouts/PrivateLayout';
import PageLoading from '@/components/shared/PageLoading';
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('@/components/pages/Dashboard'));
const ProjectPage = lazy(() => import('@/components/pages/ProjectPage'));
const SignIn = lazy(() => import('@/components/pages/SignPage'));
const SigninSuccess = lazy(() => import('@/components/pages/SignPage/SigninSuccess'));
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	const router = createBrowserRouter([{}]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateLayout>
							<Layout />
						</PrivateLayout>
					}>
					<Route
						index
						element={
							<Suspense fallback={<PageLoading />}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path='projects/:id'
						element={
							<Suspense fallback={<PageLoading />}>
								<ProjectPage />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path='/signin'
					element={
						<Suspense fallback={<PageLoading />}>
							<SignIn />
						</Suspense>
					}
				/>
				<Route
					path='/signin/success'
					element={
						<Suspense fallback={<PageLoading />}>
							<SigninSuccess />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
