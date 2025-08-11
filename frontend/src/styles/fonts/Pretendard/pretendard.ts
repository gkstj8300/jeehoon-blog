import localFont from 'next/font/local';

export const pretendard = localFont({
	src: [
		{
			path: './Pretendard-Medium.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './Pretendard-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	preload: true,
	variable: '--font-preten-dard',
});
