import { User } from './user.type';

export interface Task {
	_id: string;
	title: string;
	creator: Partial<User>;
	project: string;
	assignee: Partial<User>;
	startedAt: string;
	deadline: string;
	createdAt?: string;
	updatedAt?: string;
	description: string;
	status: string;
}
