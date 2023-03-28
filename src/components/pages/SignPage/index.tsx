import Button from '@/components/@tailwind/Button';
import { useAppSelector } from '@/redux/reduxHook';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Navigate } from 'react-router-dom';
import Logo from '/react.svg';

export default function SignIn() {
	const { authenticated } = useAppSelector((state) => state.auth);

	return !authenticated ? (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col xl:flex-row-reverse'>
				<div className='card min-w-[320px] bg-base-100 shadow-2xl'>
					<div className='card-body'>
						<div className='text-center lg:text-left'>
							<div className='flex items-center justify-center gap-3'>
								<img
									src={Logo}
									alt=''
									className='aspect-[1] min-w-[40px] self-center drop-shadow-[0_0_10px_#00d8ff] duration-500'
								/>
								<h1 className='text-3xl font-bold text-[#00d8ff] drop-shadow-[0_0_10px_#00d8ff] '>Kirin</h1>
							</div>
							<p className='py-6 text-lg sm:text-base'>
								Manage your team with Kirigami to boost up your productivity.
							</p>
						</div>
						<div className='divider'>
							<span className='text-white drop-shadow-[0_0_10px_#fff]'>Sign in</span>
						</div>
						<form
							action={import.meta.env.VITE_BASE_URL + '/auth/google'}
							method='get'
							className='my-3 flex flex-col gap-3'>
							<Button className='btn- btn-block gap-2 normal-case'>
								<FcGoogle className='text-lg' /> Signin with Google account
							</Button>
							<Button className='btn-block gap-2 normal-case'>
								<BsGithub className='text-lg' /> Signin with Github account
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Navigate to='/' />
	);
}
