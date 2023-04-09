export interface IUser {
	_id: string;
	email: string;
	displayName: string;
	picture: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Member {
	info: Partial<IUser>;
	role: string;
	joinedAt: Date | string;
}
