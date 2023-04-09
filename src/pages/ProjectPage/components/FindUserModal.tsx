import Avatar from '@/components/@tailwind/Avatar';
import Button from '@/components/@tailwind/Button';
import Loading from '@/components/@tailwind/Loading';
import { Menu, MenuItem } from '@/components/@tailwind/Menu';
import useDebounce from '@/hooks/useDebounce';
import { useAppSelector } from '@/redux/reduxHook';
import { Project } from '@/types/project.type';
import { IUser } from '@/types/user.type';
import instance from '@/utils/axios';
import React, { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

type Props = {};

const FindUserModal = () => {
	const searchInputRef = useRef<any>(undefined);
	const [searchResult, setSearchResult] = useState<Array<IUser>>([]);
	const currentUser = useAppSelector((state) => state.auth?.user);
	const { id: projectId } = useParams();

	const handleSearchUser = async (searchTerm: string) => {
		try {
			if (!searchTerm) {
				setSearchResult([]);
				return;
			}
			const response: IUser[] = await instance.post('/find-user', { searchTerm });
			console.log(response);
			setSearchResult(response);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const [debounceCallback, isDone] = useDebounce(handleSearchUser, 200);

	const handleSendInvitation = async (receiver: string) => {
		try {
			await instance.post(`/projects/${projectId}/send-invitation`, { sender: currentUser?.email, receiver, project: projectId });
		} catch (error: any) {
			console.log(error.message);
		}
	};
	const handleCloseModal = () => {
		searchInputRef.current.value = '';
		setSearchResult([]);
	};
	return (
		<>
			<input type='checkbox' id='search-user-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='scroll modal-box relative h-[320px]'>
					<label htmlFor='search-user-modal' className='btn-sm btn-circle btn absolute right-2 top-2' onClick={handleCloseModal}>
						✕
					</label>
					<h3 className='mb-6 text-xl font-medium'>Find user</h3>
					<div className='flex flex-col gap-2'>
						<div className='relative w-full px-2'>
							<div className='absolute top-1/2 -translate-y-1/2 translate-x-2'>{!isDone ? <BsSearch /> : <Loading size='xs' />}</div>

							<input
								type='text'
								className='input-bordered input w-full pl-8'
								placeholder='Find a collaborator...'
								ref={searchInputRef}
								onInput={(e: React.FormEvent<HTMLInputElement>) => debounceCallback(e.currentTarget.value as string)}
							/>
						</div>

						{searchResult.length > 0 ? (
							<Menu>
								{searchResult
									.filter((user) => user.email !== currentUser!.email)
									.map((user) => (
										<MenuItem className='scroll'>
											<label className='label'>
												<div className='flex items-center gap-2'>
													<Avatar size='xs'>
														<img src={user.picture} alt='' />
													</Avatar>
													<div className='text-sm'>
														<span className='text-white'>{user.displayName}</span>
														<br />
														{user.email}
													</div>
												</div>

												<Button className='normal-case' size='sm' onClick={() => handleSendInvitation(user.email)}>
													Send invitation
												</Button>
											</label>
										</MenuItem>
									))}
							</Menu>
						) : (
							<p className='my-4 text-center'>Collaborators will be shown here</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default FindUserModal;
