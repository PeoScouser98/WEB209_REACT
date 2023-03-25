import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className='drawer-mobile drawer'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col items-center '>
				<Outlet />
			</div>
			<Sidebar />
		</div>
	);
};

export default Layout;
