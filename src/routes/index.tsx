import PageLoading from '@/components/shared/PageLoading';
import Layout from '@/layouts/MainLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const ProjectPage = lazy(() => import('@/pages/ProjectPage'));
const SignIn = lazy(() => import('@/pages/SignPage'));
const SigninSuccess = lazy(() => import('@/pages/SignPage/SigninSuccess'));

const AppRouter = () => {
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
