import Layout from '@/layouts';
import SignIn from '@/pages/SigninPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<div>Dashboard</div>} />
				</Route>
				<Route path="/signin/success" element />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
