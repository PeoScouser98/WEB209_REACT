import tw from 'tailwind-styled-components';
import { TwProps } from '@/types/twProps.type';
import { ReactNode } from 'react';

const Button = tw.button`
    btn
    ${(props: TwProps<string | ReactNode>) => {
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
    
    ${(props: TwProps<string | ReactNode>) => {
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
    
    ${(props: TwProps<string | ReactNode>) => (props.outline ? 'btn-outline' : '')}
    
    ${(props: TwProps<string | ReactNode>) => {
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
        
    ${(props: TwProps<string | ReactNode>) => {
			return props.disabled ? 'no-animation' : '';
		}}

    ${(props: TwProps<string | ReactNode>) => {
			return props.isLoading ? 'loading' : '';
		}}
        `;

export default Button;
