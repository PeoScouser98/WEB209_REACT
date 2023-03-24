import { useGetUserQuery } from '@/redux/apis/authApi';
import React from 'react';

type Props = {};

const SigninSuccess = (props: Props) => {
	const { data } = useGetUserQuery(undefined);
	console.log(data);
	return <div>Success!</div>;
};

export default SigninSuccess;
