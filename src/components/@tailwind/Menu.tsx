import tw from 'tailwind-styled-components';
import { TwProps } from '@/types/twProps.type';
import { ReactNode } from 'react';
export const MenuItem = tw.li`truncate w-full sm:text-sm font-normal `;
export const Menu = tw.ul`menu items-stretch rounded-lg p-1 ${(props: TwProps<string | ReactNode>) => {
	switch (props.direction) {
		case 'vertical':
			return 'vertical-menu';
		case 'horizontal':
			return 'horizontal-menu';
		default:
			return 'vertical-menu';
	}
}}`;
