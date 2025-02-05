import { footer } from '@/components/layout/footer/Footer.i18n.ko';
import { header } from '@/components/layout/header/Header.i18n.ko';
import { profile } from '@/components/pages/Profile/Profile.i18n.ko';
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
			profile,	
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
