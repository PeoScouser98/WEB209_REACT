import { ReactNode } from 'react';

type ICollapseProps = {
	children: ReactNode;
	title: string | ReactNode;
	tw?: string;
	isDragging?: boolean;
	[key: string]: any;
};

const Collapse = (props: ICollapseProps) => {
	return (
		<div tabIndex={0} className={`collapse-arrow collapse w-full ${props.tw}`}>
			<input type='checkbox' />
			<div className='collapse-title flex items-center gap-3 p-0'>{props.title}</div>
			<div className='collapse-content h-fit min-w-full px-1' tabIndex={0}>
				<div className='mt-4'>{props.children}</div>
			</div>
		</div>
	);
};

export default Collapse;
