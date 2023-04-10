import { IUser } from './user.type';

export interface IActivity {
	_id: string;
	createdBy: Partial<IUser>;
	log: string;
	createdAt: Date;
	updatedAt?: Date;
}

export interface IActivityList {
	docs: Array<IActivity>;
	page: number;
	nextPage: any;
	[key: string]: any;
}
