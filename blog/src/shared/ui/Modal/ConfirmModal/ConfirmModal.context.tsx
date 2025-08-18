import React, {
	createContext,
	ReactElement,
	useCallback,
	useContext,
	useReducer,
} from 'react';
import { ConfirmModal } from './ConfirmModal';
import { isObject } from '@/shared/utils/object';

type ButtonNode = string | ReactElement;
type MessageNode = string | ReactElement;
type TitleNode = string | ReactElement;

/** Confirm modal content resource */
type ConfirmResource = | MessageNode | {
	title?: TitleNode;
	message: MessageNode;
	confirmButton?: ButtonNode;
	closeButton?: string | ReactElement;
};

/** Confirm modal context type */
type ConfirmModalContext =
	| {
	isOpen: false;
	resource: ConfirmResource;
	onConfirm?: () => void;
	onClose?: () => void;
}
	| {
	isOpen: true;
	resource: ConfirmResource;
	onConfirm: () => void;
	onClose: () => void;
};

/** Confirm dispatch context type */
type ConfirmDispatchContext = (message: ConfirmResource) => Promise<boolean>;

const ConfirmModalContext = createContext<ConfirmModalContext>({
	isOpen: false,
	resource: {
		message: '',
	},
});

const ConfirmDispatchContext = createContext<ConfirmDispatchContext>(
	async () => false
);

type ConfirmModalAction =
	| {
	type: 'OPEN';
	context: Required<Omit<ConfirmModalContext, 'isOpen'>>;
} | {
	type: 'CLOSE';
} | {
	type: 'CONFIRM';
};

function reducer(
	state: ConfirmModalContext,
	action: ConfirmModalAction
): ConfirmModalContext {
	switch (action.type) {
		case 'OPEN':
			return { ...action.context, isOpen: true };
		case 'CLOSE':
			return { ...state, isOpen: false };
		case 'CONFIRM':
			return { ...state, isOpen: false };
	}
}

/**
 * Confirm modal provider
 * It is assumed to be the only one used by the App component.
 */
export const ConfirmModalProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [context, dispatch] = useReducer(reducer, {
		isOpen: false,
		resource: { message: '' },
	});

	const dispatcher = useCallback((message: ConfirmResource) => {
		return new Promise<boolean>(resolve => {
			const close = () => dispatch({ type: 'CLOSE' });

			dispatch({
				type: 'OPEN',
				context: {
					resource: message,
					onClose() {
						close();
						resolve(false);
					},
					onConfirm() {
						close();
						resolve(true);
					},
				},
			});
		});
	}, []);

	return (
		<ConfirmModalContext.Provider value={context}>
			<ConfirmDispatchContext.Provider value={dispatcher}>
				{children}
			</ConfirmDispatchContext.Provider>
		</ConfirmModalContext.Provider>
	);
};
ConfirmModalProvider.displayName = 'ConfirmModalProvider';

export const ConfirmModalController: React.VFC = () => {
	const { isOpen, resource, onClose, onConfirm } =
		useContext(ConfirmModalContext);
	return (
		<ConfirmModal
			{...{ isOpen, onClose, onConfirm, ...normalizeResource(resource) }}
		/>
	);
};
ConfirmModalController.displayName = 'ConfirmModalController';

function normalizeResource(resource: ConfirmResource) {
	if (typeof resource === 'string') {
		return { message: resource };
	}

	if (isObject(resource) && 'message' in resource) {
		return resource;
	}
	return { message: resource };
}

export const useConfirmModal = () => ({
	showConfirm: useContext(ConfirmDispatchContext),
});
