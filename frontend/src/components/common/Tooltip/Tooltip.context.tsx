import {
	createContext,
	CSSProperties,
	RefObject,
	createRef,
	ReactNode,
	useContext,
	useCallback,
	useState,
	useRef,
	FC,
	useEffect,
} from 'react';
import Tooltip from './Tooltip';
import { sleep } from '@/utils/timer/timer';

type Theme = 'light' | 'dark';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type ToolTip = {
	position: CSSProperties;
	direction: Direction;
	showsTooltip: boolean;
	openTooltip: (
		content: ReactNode,
		offset: number,
		direction: Direction,
		theme: Theme,
		ref: RefObject<HTMLDivElement>
	) => void;
	closeTooltip: () => void;
	tooltipRef: RefObject<HTMLDivElement>;
	theme: Theme;
	content: ReactNode;
};

export const TooltipContext = createContext<ToolTip>({
	position: {},
	direction: 'bottom',
	showsTooltip: false,
	openTooltip: () => {
		// noop
	},
	closeTooltip: () => {
		// noop
	},
	tooltipRef: createRef<HTMLDivElement>(),
	theme: 'dark',
	content: '',
});

/** Tooltip context provider */
export const TooltipProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [position, setPosition] = useState<CSSProperties>({ top: 0, left: 0 });
	const [direction, setDirection] = useState<Direction>('bottom');
	const [showsTooltip, setShowsTooltip] = useState(false);

	const tooltipRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<ReactNode>('');
	const [theme, setTheme] = useState<Theme>('dark');

	const openTooltip = useCallback(
		(
			content: ReactNode,
			offset = 0,
			direction: Direction,
			theme: Theme,
			targetRef: RefObject<HTMLElement>
		) => {
			setDirection(direction);
			setContent(content);
			setTheme(theme);
			sleep(0).then(() => {
				if (!targetRef.current || !tooltipRef.current) {
					return;
				}

				const targetRect = targetRef.current.getBoundingClientRect();
				const tooltipRect = tooltipRef.current.getBoundingClientRect();
				setPosition({
					left: getLeft(direction, targetRect, tooltipRect, offset),
					top: getTop(direction, targetRect, tooltipRect, offset),
				});
			});

			setShowsTooltip(true);
		},
		[]
	);

	const closeTooltip = useCallback(() => {
		setShowsTooltip(false);
	}, []);

	return (
		<TooltipContext.Provider
			value={{
				position,
				direction,
				showsTooltip,
				openTooltip,
				closeTooltip,
				tooltipRef,
				theme,
				content,
			}}
		>
			{children}
		</TooltipContext.Provider>
	);
};

export const TooltipController = () => {
	const {
		position,
		direction,
		showsTooltip,
		closeTooltip,
		theme,
		tooltipRef,
		content,
	} = useContext(TooltipContext);

	useEffect(() => {
		window.addEventListener('scroll', closeTooltip);
		return () => window.removeEventListener('scroll', closeTooltip);
	}, [closeTooltip]);

	return (
		<Tooltip ref={tooltipRef} {...{ position, direction, showsTooltip, theme }}>
			{content}
		</Tooltip>
	);
};

function getLeft(
	direction: Direction,
	targetRect: DOMRect,
	tooltipRect: DOMRect,
	offset: number
) {
	switch (direction) {
		case 'top':
		case 'bottom':
			return targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
		case 'left':
			return targetRect.right + 10 + offset;
		case 'right':
			return targetRect.left - (tooltipRect.width + 10) - offset;
	}
}

function getTop(
	direction: Direction,
	targetRect: DOMRect,
	tooltipRect: DOMRect,
	offset: number
) {
	switch (direction) {
		case 'top':
			return targetRect.bottom + 10 + offset;
		case 'bottom':
			return targetRect.top - tooltipRect.height - 10 - offset;
		case 'left':
		case 'right':
			return targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
	}
}
