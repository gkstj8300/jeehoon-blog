import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode, RefObject } from 'react';
import styles from './Tooltip.module.scss';
import { usePortal } from '@/hooks/usePortal';

export const Themes = [
	'light',
	'dark',
] as const;

export type Theme = (typeof Themes)[number];

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type TooltipProps = {
	className?: string;
	describedby?: string;
	position: CSSProperties;
	direction: Direction;
	theme?: Theme;
	ref: RefObject<HTMLDivElement>;
	showsTooltip: boolean;
	children: ReactNode;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
	(
		{
			children,
			className,
			describedby,
			position,
			direction = 'bottom',
			theme = 'dark',
			showsTooltip,
		},
		ref
	) => {
		const { Portal } = usePortal();

		if (!showsTooltip) {
			return null;
		}

		return (
			<Portal>
				<div
					data-direction={direction}
					data-theme={theme}
					className={classNames(styles.tooltip, className)}
					style={position}
					role="tooltip"
					aria-describedby={describedby}
					ref={ref}
				>
					{children}
				</div>
			</Portal>
		);
	}
);

Tooltip.displayName = 'Tooltip';
