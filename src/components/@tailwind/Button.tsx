import tw from 'tailwind-styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
	shape?: string;
	color?: string;
	size?: string;
	outline?: boolean;
	disabled?: boolean;
	isLoading?: boolean;
}

const Button = tw.button`
    btn
    ${(props: ButtonProps) => {
			switch (props.shape) {
				case 'circle':
					return 'btn-circle';
				case 'square':
					return 'btn-square';
				case 'pill':
					return 'rounded-full';
				default:
					return '';
			}
		}}
    
    ${(props: ButtonProps) => {
			switch (props.size) {
				case 'sm':
					return 'btn-sm';
				case 'md':
					return 'btn-md';
				case 'lg':
					return 'btn-lg';
				case 'wide':
					return 'btn-wide';
				case 'block':
					return 'btn-block';
				case 'responsive':
					return '';
				default:
					return 'btn-md';
			}
		}}
    
    ${(props: ButtonProps) => (props.outline ? 'btn-outline' : '')}
    
    ${(props: ButtonProps) => {
			switch (props.color) {
				case 'success':
					return 'btn-success';
				case 'error':
					return 'btn-error';
				case 'info':
					return 'btn-info';
				case 'primary':
					return 'btn-primary';
				case 'secondary':
					return 'btn-secondary';
				case 'accent':
					return 'btn-accent';
				case 'ghost':
					return 'btn-ghost';
				case 'transparent':
					return 'btn-ghost hover:bg-transparent';
				case 'neutral':
					return 'bg-neutral';
				case 'disabled':
					return 'disabled';
				default:
					return '';
			}
		}}
        
    ${(props: ButtonProps) => {
			return props.disabled ? 'no-animation' : '';
		}}

    ${(props: ButtonProps) => {
			return props.isLoading ? 'loading' : '';
		}}
        `;

export default Button;
