'use client';

import i18next from 'i18next';
import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { setLocale } from 'yup';
import '@/lib/i18n';
import { store } from '@/lib/store';
import { createLocale } from '@/lib/validators/locale';

export default function Providers({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const t = i18next.getFixedT('ko');
		setLocale(createLocale(t));
	}, []);

	return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
