import { Project } from './project.type';
import { Task } from './task.type';

export interface AppContextType {
	currentTask: Task | null;
	setCurrentTask: React.Dispatch<React.SetStateAction<Task | null>>;
	currentProject: Project | null;
	setCurrentProject: React.Dispatch<React.SetStateAction<Project | null>>;
	[key: string]: any;
}
