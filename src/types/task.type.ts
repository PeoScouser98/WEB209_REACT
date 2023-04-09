import { IUser } from './user.type';

export interface Task {
	_id: string;
	title: string;
	creator: Partial<IUser>;
	project: string;
	assignee: Partial<IUser>;
	startedAt: string;
	deadline: string;
	createdAt?: string;
	updatedAt?: string;
	description: string;
	priority: string;
	status: string;
}
