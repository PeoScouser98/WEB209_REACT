import { User } from './user.type';

export type Auth = {
	user: Partial<User> | null;
	authenticated: boolean;
};
