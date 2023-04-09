import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {
	direction?: string;
}

export const MenuItem = tw.li`truncate w-full sm:text-sm font-normal `;
export const Menu = tw.ul`menu items-stretch rounded-lg p-1  ${(props: IMenuProps) => {
	switch (props.direction) {
		case 'vertical':
			return 'vertical-menu';
		case 'horizontal':
			return 'horizontal-menu';
		default:
			return 'vertical-menu';
	}
}}`;
