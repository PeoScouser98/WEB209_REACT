import { User } from './user.type';

export interface Task {
	_id: string;
	title: string;
	creator: Partial<User>;
	project: string;
	assignee: Partial<User>;
	startedAt: Date;
	deadline: Date;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	description: string;
	status: string;
}
