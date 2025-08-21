import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type GetLayout = (page: ReactElement) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: GetLayout;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
