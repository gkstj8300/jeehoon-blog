/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { setLocale } from 'yup';
import { GoogleAnalytics } from '@/components/anylytics/GoogleAnalytics';
import '@/styles/globals.scss';
import '@/i18n';
import { Standard } from '@/layouts/standard';
import { store } from '@/store';
import { type AppPropsWithLayout } from '@/utils/types';
import { createLocale } from '@/validators/locale';

(() => {
	const t = i18next.getFixedT('ko');
	setLocale(createLocale(t));
})();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const [t] = useTranslation();

    const getLayout = Component.getLayout || Standard;

    useEffect(() => {
		setLocale(createLocale(t));
	}, [t]);

    return (
        <>
            <Provider store={store}>
                {getLayout(<Component {...pageProps} />)}
                <GoogleAnalytics />
            </Provider>
        </>
    );
}
export default App;