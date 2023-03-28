import { useAppSelector } from '@/redux/reduxHook';
import { ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateLayout: ReactNode | any = ({ children }: { children: ReactNode }) => {
	const { authenticated } = useAppSelector((state) => state.auth);
	return authenticated ? children : <Navigate to='/signin' replace={true} />;
};

export default PrivateLayout;
