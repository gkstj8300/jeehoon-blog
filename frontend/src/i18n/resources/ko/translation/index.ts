import { footer } from '@/components/layout/footer/Footer.i18n.ko';
import { header } from '@/components/layout/header/Header.i18n.ko';
import { about } from '@/components/pages/About/About.i18n.ko';
import { home } from '@/components/pages/Home/Home.i18n.ko';
import { postDetail } from '@/components/pages/PostDetail/PostDetail.i18n.ko';
import { breadcrumbs } from '@/components/ui/links/Breadcrumbs.i18n.ko';
import type { Translation } from '@/i18n/types';

const translation: Translation = {
	common: {
	},
	component: {
		ui: {
			layouts: {
				header,
				footer,
			},
			links: {
				breadcrumbs,
			}
		},
		pages: {
			home,
			postDetail,
			about,
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
