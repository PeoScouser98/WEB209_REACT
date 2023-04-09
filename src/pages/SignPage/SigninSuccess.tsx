import { useGetUserQuery } from '@/redux/apis/authApi';
import { Navigate } from 'react-router-dom';

const SigninSuccess = () => {
	const { data, isFetching } = useGetUserQuery();
	console.log(data);
	return !!data ? <Navigate to='/' replace={true} /> : <Navigate to='/signin' replace={true} />;
};

export default SigninSuccess;
