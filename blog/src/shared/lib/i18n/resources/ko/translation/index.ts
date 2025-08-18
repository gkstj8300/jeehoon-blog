import { about } from '@/features/about/ui/AboutPage/AboutPage.i18n.ko';
import { home } from '@/features/home/ui/HomePage/HomePage.i18n.ko';
import { postDetail } from '@/features/postDetail/ui/PostDetailPage/PostDetailPage.i18n.ko';
import { write } from '@/features/write/ui/WritePage/WritePage.i18n.ko';
import type { Translation } from '@/shared/lib/i18n/types';
import { breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs.i18n.ko';
import { footer } from '@/shared/ui/layouts/Footer/Footer.i18n.ko';
import { header } from '@/shared/ui/layouts/Header/Header.i18n.ko';

const translation: Translation = {
	common: {},
	component: {
		ui: {
			layouts: {
				header,
				footer,
			},
			links: {
				breadcrumbs,
			},
		},
		pages: {
			home,
			postDetail,
			about,
			write,
		},
	},
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
