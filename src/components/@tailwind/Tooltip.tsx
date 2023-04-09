import tw from 'tailwind-styled-components';

interface ITooltipProps extends React.HTMLAttributes<HTMLElement> {
	position?: string;
}
const Tooltip = tw.div`tooltip 

${(props: ITooltipProps) => {
	switch (props.color) {
		case 'primary':
			return 'tooltip-primary';
		case 'secondary':
			return 'tooltip-secondary';
		case 'success':
			return 'tooltip-success';
		case 'error':
			return 'tooltip-error';
		case 'accent':
			return 'tooltip-accent';

		default:
			break;
	}
}}

${(props: ITooltipProps) => {
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
