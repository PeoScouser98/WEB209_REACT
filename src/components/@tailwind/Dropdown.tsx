import tw from 'tailwind-styled-components';
import { TwProps } from '@/types/twProps.type';

import { ReactNode } from 'react';

export const Dropdown = tw.div`dropdown ${(props: TwProps<string | ReactNode>) => {
	switch (props.position) {
		case 'end':
			return 'dropdown-end';
		case 'right':
			return 'dropdown-right dropdown-end';
		case 'right-end':
			return 'dropdown-right dropdown-end';
		case 'left':
			return 'dropdown-left';
		case 'left-end':
			return 'dropdown-left dropdown-end';
		case 'top':
			return 'dropdown-top';
		case 'top-end':
			return 'dropdown-top dropdown-end';
		case 'bottom':
			return 'dropdown-bottom';
		case 'bottom-end':
			return 'dropdown-bottom dropdown-end';
		default:
			return '';
	}
}}
	`;
export const DropdownContent = tw.div`dropdown-content w-fit rounded-xl`;
