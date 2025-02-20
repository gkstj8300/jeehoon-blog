import { footer } from '@/components/layout/footer/Footer.i18n.ko';
import { header } from '@/components/layout/header/Header.i18n.ko';
import { contact } from '@/components/pages/Home/Contact/Contact.i18n.ko';
import { post } from '@/components/pages/Home/Post/Post.i18n.ko';
import { profile } from '@/components/pages/Home/Profile/Profile.i18n.ko';
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
			contact,
			profile,
			post,
		}
	}
};

// 'export default' for i18n-ally (vscode extension)
export default translation;
