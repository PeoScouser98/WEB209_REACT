import tw from 'tailwind-styled-components';
import { TwProps } from '@/types/twProps.type';

const Badge = tw.span`badge ${(props: TwProps<string>) => {
	switch (props.type) {
		case 'primary':
			return 'badge-primary';

		default:
			break;
	}
}}`;
