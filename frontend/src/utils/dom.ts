import { RefObject } from 'react';
import { isObject } from '@/utils/object';

export function getRect(selector: string): DOMRect | undefined;
export function getRect(element: HTMLElement): DOMRect;
export function getRect<T extends HTMLElement>(
	elementRef: RefObject<T>
): DOMRect | undefined;
export function getRect(
	selectorOrElOrRef: string | HTMLElement | RefObject<HTMLElement>
) {
	if (typeof selectorOrElOrRef === 'string') {
		return document.querySelector(selectorOrElOrRef)?.getBoundingClientRect();
	} else if (isObject(selectorOrElOrRef) && 'current' in selectorOrElOrRef) {
		return selectorOrElOrRef.current?.getBoundingClientRect();
	}
	return selectorOrElOrRef.getBoundingClientRect();
}

export function getHeight(selector: string): number | undefined;
export function getHeight(element: HTMLElement): number;
export function getHeight<T extends HTMLElement>(
	elementRef: RefObject<T>
): number | undefined;
export function getHeight(
	selectorOrElOrRef: string | HTMLElement | RefObject<HTMLElement>
) {
	if (typeof document === 'undefined') {
		return;
	}

	if (typeof selectorOrElOrRef === 'string') {
		return getRect(selectorOrElOrRef)?.height;
	} else if (isObject(selectorOrElOrRef) && 'current' in selectorOrElOrRef) {
		return getRect(selectorOrElOrRef)?.height;
	}
	return getRect(selectorOrElOrRef).height;
}

export function getWidth(selector: string): number | undefined;
export function getWidth(element: HTMLElement): number;
export function getWidth<T extends HTMLElement>(
	elementRef: RefObject<T>
): number | undefined;
export function getWidth(
	selectorOrElOrRef: string | HTMLElement | RefObject<HTMLElement>
) {
	if (typeof selectorOrElOrRef === 'string') {
		return getRect(selectorOrElOrRef)?.width;
	} else if (isObject(selectorOrElOrRef) && 'current' in selectorOrElOrRef) {
		return getRect(selectorOrElOrRef)?.width;
	}
	return getRect(selectorOrElOrRef).width;
}

export function getTop(selector: string): number | undefined;
export function getTop(element: HTMLElement): number;
export function getTop<T extends HTMLElement>(
	elementRef: RefObject<T>
): number | undefined;
export function getTop(
	selectorOrElOrRef: string | HTMLElement | RefObject<HTMLElement>
) {
	if (typeof selectorOrElOrRef === 'string') {
		return getRect(selectorOrElOrRef)?.top;
	} else if (isObject(selectorOrElOrRef) && 'current' in selectorOrElOrRef) {
		return getRect(selectorOrElOrRef)?.top;
	}
	return getRect(selectorOrElOrRef).top;
}

export function getChildren(element: HTMLElement): HTMLElement[] {
	return Array.from(element.children) as HTMLElement[];
}

export function getDocumentWidth() {
	return document.documentElement.clientWidth;
}

export function getDocumentHeight() {
	return document.documentElement.clientHeight;
}

export function getHeightWithoutPadding(element: Element) {
	const computed = getComputedStyle(element);
	const totalPadding =
		parseInt(computed.paddingTop) + parseInt(computed.paddingBottom);

	return element.clientHeight - totalPadding;
}

export function getVerticalScrollbarWidth() {
	const hasVerticalScrollbar =
		window.innerWidth > document.documentElement.clientWidth;

	if (hasVerticalScrollbar) {
		const outer = document.createElement('div');

		outer.style.cssText =
			'visibility: hidden; width: 100px; overflow: scroll; position: absolute; top: -9999px;';
		document.body.appendChild(outer);
		const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
		outer.remove();
		return scrollbarWidth;
	}

	// If there is no vertical scrollbar, return 0
	return 0;
}

export function scrollParentToChild(parent: Element, child: Element) {
	const parentRect = parent.getBoundingClientRect();
	const parentViewableArea = {
		height: parent.clientHeight,
		width: parent.clientWidth,
	};

	const childRect = child.getBoundingClientRect();

	const isChildViewable =
		childRect.top >= parentRect.top &&
		childRect.bottom <= parentRect.top + parentViewableArea.height;

	if (!isChildViewable) {
		const scrollTop = childRect.top - parentRect.top;
		const scrollBottom = childRect.bottom - parentRect.bottom;

		if (Math.abs(scrollTop) < Math.abs(scrollBottom)) {
			parent.scrollTop += scrollTop;
		} else {
			parent.scrollTop += scrollBottom;
		}
	}
}

export function getElementScrollY(selector: string): number | undefined;
export function getElementScrollY(element: HTMLElement): number;
export function getElementScrollY<T extends HTMLElement>(
	elementRef: RefObject<T>
): number | undefined;
export function getElementScrollY(
	selectorOrElOrRef: string | HTMLElement | RefObject<HTMLElement>
) {
	let top: number;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (typeof selectorOrElOrRef === 'string') {
		top = getRect(selectorOrElOrRef)?.top ?? 0;
	} else if (isObject(selectorOrElOrRef) && 'current' in selectorOrElOrRef) {
		top = getRect(selectorOrElOrRef)?.top ?? 0;
	} else {
		top = getRect(selectorOrElOrRef).top;
	}

	return top + scrollTop;
}
