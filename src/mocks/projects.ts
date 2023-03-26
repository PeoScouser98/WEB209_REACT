import { Project } from '@/types/project.type';

export const projects: Array<Project> = [
	{
		_id: '2d26d97529a1b99cfba9c567 ',
		projectName: 'DATN',
		budget: 1000,
		customer: 'UNKNOWN',
		estimatedCompleteDate: '3/26/2024',
		creator: {
			_id: 'db470076de94d01ee756adde',
			displayName: 'Test 1',
			email: 'test1@gmail.com',
			picture: 'https://ui-avatars.com/api/?name=t',
		},
		members: [
			{
				info: {
					_id: '59a1182c8db50dbd8962f5b7',
					displayName: 'Test 2',
					email: 'test2@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				joinedAt: '3/26/2023',
				role: 'MEMBER',
			},
			{
				info: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 3',
					email: 'test3@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},

				joinedAt: '3/26/2023',
				role: 'MEMBER',
			},
		],
		tasks: [
			{
				_id: '1',
				title: 'Task 1',
				creator: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				description: 'task 2',
				assignee: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				startedAt: '3/26/2023',
				deadline: '3/30/2023',
				status: 'TODO',
			},
			{
				_id: '2',
				title: 'Task 2',
				creator: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				description: 'task 2',
				assignee: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				startedAt: '3/26/2023',
				deadline: '3/30/2023',
				status: 'IN_PROGRESS',
			},
			{
				_id: '3',
				title: 'Task 3',
				creator: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				description: 'task 3',
				assignee: {
					_id: 'f1aaaa6d58bd7968ca9f881f',
					displayName: 'Test 1',
					email: 'test1@gmail.com',
					picture: 'https://ui-avatars.com/api/?name=t',
				},
				startedAt: '3/26/2023',
				deadline: '3/30/2023',
				status: 'COMPLETED',
			},
		],
	},
];
