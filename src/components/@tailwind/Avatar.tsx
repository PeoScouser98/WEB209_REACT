import tw from 'tailwind-styled-components';

interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
	size?: string;
	online?: boolean;
}

const Avatar = tw.div`avatar [&>img]:rounded-full [&>img]:object-cover

	${(props: AvatarProps) => {
		switch (props.size) {
			case 'xxs':
				return '[&>img]:w-6 [&>img]:h-6';
			case 'xs':
				return '[&>img]:w-8 [&>img]:h-8';
			case 'sm':
				return '[&>img]:w-10 [&>img]:h-10';
			case 'md':
				return '[&>img]:w-12 [&>img]:h-12';
			case 'lg':
				return '[&>img]:w-16 [&>img]:h-16';
			default:
				return '[&>img]:w-12 [&>img]:h-12';
		}
	}} 
		
	${(props: AvatarProps) => (Boolean(props.online) ? 'online' : '')}	
`;

export default Avatar;
