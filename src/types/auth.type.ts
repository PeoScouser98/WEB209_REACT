import { IUser } from './user.type';

export type Auth = {
	user: Partial<IUser> | null;
	authenticated: boolean;
};
