import { ClassAttributes, HTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from 'react';

export type TwProps<P> = {
	[key: string]: (ClassAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLDivElement>) | P;
};
