import Button from '@/components/@tailwind/Button';
import Logo from '@/components/shared/Logo';
import { useAppSelector } from '@/redux/reduxHook';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Navigate } from 'react-router-dom';

export default function SignIn() {
	return (
		<div className='hero min-h-screen bg-neutral-focus'>
			<div className='hero-content flex-col xl:flex-row-reverse'>
				<div className='card min-w-[320px] bg-base-300 shadow-2xl '>
					<div className='card-body '>
						<div className='text-center lg:text-left'>
							<Logo />
							<p className='py-6 text-lg sm:text-base'>Manage your team with Rubik to boost up your productivity.</p>
						</div>
						<div className='divider'>
							<span className='text-white drop-shadow-[0_0px_20px_#fff]'>Sign in</span>
						</div>
						<form action={import.meta.env.VITE_BASE_URL + '/auth/google'} method='get' className='my-3 flex flex-col gap-3'>
							<Button className='hover: btn-block gap-2 normal-case duration-300 hover:drop-shadow-[0_0_1rem_#661ae6]'>
								<FcGoogle className='text-lg' /> Sign in with Google account
							</Button>
							<Button className='btn-block gap-2 normal-case duration-300 hover:drop-shadow-[0_0_1rem_#661ae6]'>
								<BsGithub className='text-lg' /> Sign in with Github account
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
