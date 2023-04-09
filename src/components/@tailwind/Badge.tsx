import tw from 'tailwind-styled-components';

interface IBadgeProps extends React.HTMLAttributes<HTMLElement> {
	type?: string;
}

const Badge = tw.span`badge ${(props: IBadgeProps) => {
	switch (props.type) {
		case 'primary':
			return 'badge-primary';

		default:
			break;
	}
}}`;
