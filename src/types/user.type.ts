export interface User {
	_id: string;
	email: string;
	displayName: string;
	picture: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Member {
	info: Partial<User>;
	role: string;
	joinedAt: Date | string;
}
