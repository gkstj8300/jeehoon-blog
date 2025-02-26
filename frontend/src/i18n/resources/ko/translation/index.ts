import { footer } from '@/components/layout/footer/Footer.i18n.ko';
import { header } from '@/components/layout/header/Header.i18n.ko';
import { home } from '@/components/pages/Home/Home.i18n.ko';
import { postDetail } from '@/components/pages/PostDetail/PostDetail.i18n.ko';
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
		},
		pages: {
			home,
			postDetail,
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
