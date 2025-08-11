import { useRef, ReactNode, useContext, MouseEvent } from 'react';
import { Direction, Theme } from './Tooltip';
import { TooltipContext } from '.';

type Options = {
	content: ReactNode;
	direction?: Direction;
	closeOnClick?: boolean;
	offset?: number;
	theme?: Theme;
};

export function useTooltip<T extends HTMLDivElement | HTMLAnchorElement>({
	content,
	direction = 'bottom',
	closeOnClick = false,
	offset = 0,
	theme = 'dark',
}: Options) {
	const { closeTooltip, openTooltip, tooltipRef } = useContext(TooltipContext);

	const targetRef = useRef<T | null>(null);

	const onMouseEnter = () => {
		if (!content) {
			return;
		}
		openTooltip(content, offset, direction, theme, targetRef);
	};

	const onMouseLeave = (event: MouseEvent) => {
		if (event.relatedTarget === tooltipRef.current) {
			return;
		}
		closeTooltip();
	};

	return {
		bind: {
			ref: targetRef,
			onMouseEnter,
			onMouseLeave,
			onFocus: onMouseEnter,
			onBlur: closeTooltip,
			onClick: closeOnClick ? onMouseEnter : undefined,
		},
	};
}
