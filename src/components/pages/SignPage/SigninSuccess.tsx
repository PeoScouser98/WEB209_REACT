import { useGetUserQuery } from '@/redux/apis/authApi';
import React from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';

type Props = {};

const SigninSuccess = (props: Props) => {
	const { data, isFetching } = useGetUserQuery();
	console.log(data);
	return !!data ? <Navigate to='/' replace={true} /> : <Navigate to='/signin' replace={true} />;
};

export default SigninSuccess;
