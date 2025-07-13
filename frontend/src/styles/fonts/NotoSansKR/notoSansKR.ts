import localFont from 'next/font/local';

export const notoSansKR = localFont({
    src: [
        {
            path: './NotoSansKR-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './NotoSansKR-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    preload: true,
    variable: '--font-noto-sans-kr',
});
