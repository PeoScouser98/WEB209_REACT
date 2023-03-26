import { Task } from './task.type';
import { User } from './user.type';

export interface Project {
	_id: string;
	projectName: string;
	creator: Partial<User>;
	budget: number;
	members: Array<{
		info: Partial<User>;
		joinedAt: Date | string;
		role: string;
	}>;
	customer: string;
	estimatedCompleteDate: Date | string;
	tasks?: Array<Task>;
}
