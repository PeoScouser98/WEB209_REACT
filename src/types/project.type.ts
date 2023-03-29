import { Task } from './task.type';
import { Member, User } from './user.type';

export interface Project {
	_id: string;
	projectName: string;
	creator: Partial<User>;
	members: Array<Member>;
	startedAt: string;
	estimatedCompleteDate: string;
	tasks?: Array<Task>;
}
