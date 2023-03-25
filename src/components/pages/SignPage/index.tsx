import Button from '@/components/@tailwind/Button';
import { FcGoogle } from 'react-icons/fc';
import Logo from '/react.svg';

export default function SignIn() {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>Manage your team with and improve your productivity.</p>
				</div>

				<div className='card min-w-[320px] bg-base-100 shadow-2xl'>
					<div className='card-body'>
						<img src={Logo} alt='' className='aspect-[1] min-w-[60px] self-center drop-shadow-[0_0_10px_#00d8ff] duration-500' />
						<p className='my-6'>
							<span className='text-2xl font-medium'>Signin</span>
							<br />
							with your Google account
						</p>
						<form action={import.meta.env.VITE_BASE_URL + '/auth/google'} method='get'>
							<Button className='btn-block gap-2 normal-case'>
								<FcGoogle /> Signin with Google account
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
