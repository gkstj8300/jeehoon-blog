import { breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs.i18n.ko';
import { footer } from '@/components/layout/Footer/Footer.i18n.ko';
import { header } from '@/components/layout/Header/Header.i18n.ko';
import { about } from '@/components/pages/about/About.i18n.ko';
import { home } from '@/components/pages/home/Home.i18n.ko';
import { postDetail } from '@/components/pages/postDetail/PostDetail.i18n.ko';
// import { write } from '@/components/pages/Write/Write.i18n.ko';
import type { Translation } from '@/lib/i18n/types';

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
			// write,
		},
	},
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
