import { GetLayout } from '@/utils/types';

export const None: GetLayout = page => {
	return (
		<>
			{page}
		</>
	);
};
