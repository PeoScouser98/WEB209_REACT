import tw from 'tailwind-styled-components';
import { TwProps } from '@/types/twProps.type';

const Tooltip = tw.div`tooltip ${(props: TwProps<string>) => {
	switch (props.position) {
		case 'top':
			return 'tooltip-top';
		case 'bottom':
			return 'tooltip-bottom';
		case 'right':
			return 'tooltip-right';
		case 'left':
			return 'tooltip-left';
		default:
			return 'tooltip-top';
	}
}}`;

export default Tooltip;
