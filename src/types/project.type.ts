import { Task } from './task.type';
import { Member, IUser } from './user.type';

export interface Project {
	_id: string;
	projectName: string;
	creator: Partial<IUser>;
	members: Array<Member>;
	startedAt: string;
	estimatedCompleteDate: string;
	tasks?: Array<Task>;
}
