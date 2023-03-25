import { ReactElement, ReactNode } from 'react';
import tw from 'tailwind-styled-components';

type CollapseProps = {
	children: ReactNode;
	title: string | ReactElement;
	tw?: string;
};

const Collapse = (props: CollapseProps) => {
	return (
		<div tabIndex={0} className={`collapse-arrow collapse w-full ${props.tw}`}>
			<input type='checkbox' />
			<div className='collapse-title flex items-center gap-3 p-0'>{props.title}</div>
			<div className='collapse-content h-fit min-w-full' tabIndex={0}>
				<div className='mt-4'>{props.children}</div>
			</div>
		</div>
	);
};

export default Collapse;
