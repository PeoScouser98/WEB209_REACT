import { User } from './user.type';

export interface Task {
	_id: string;
	title: string;
	creator: Partial<User>;
	assignee: Partial<User>;
	startedAt: Date | string;
	deadline: Date | string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	description: string;
	status: string;
}
