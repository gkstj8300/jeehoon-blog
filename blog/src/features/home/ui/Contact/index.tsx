import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaRegUserCircle } from '@react-icons/all-files/fa/FaRegUserCircle';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';
import IconLink from '@/shared/ui/IconLink';
import Title from '@/shared/ui/Title';
import { useTooltip } from '@/shared/ui/Tooltip/Tooltip.hooks';
import { url } from '@/shared/utils/url';

export default function Contact() {
	const { t } = useTranslation();

	const { bind } = useTooltip<HTMLAnchorElement>({
		content: t('component.pages.home.contact.emailTooltip'),
		theme: 'dark',
		closeOnClick: true,
	});

	const handleEmailCopy = useCallback(
		(email: string) => {
			navigator.clipboard.writeText(email).then(() => {
				alert(t('component.pages.home.contact.emailCopy'));
			});
		},
		[t]
	);

	const contactItems = [
		{
			icon: <MdEmail />,
			href: '',
			text: t('component.pages.home.contact.email'),
			onClick: () => handleEmailCopy('gkstj8300@naver.com'),
			bind: bind,
		},
		{
			icon: <FaGithub />,
			href: url.github,
			text: t('component.pages.home.contact.github'),
		},
		{
			icon: <FaRegUserCircle />,
			href: url.careerDescription,
			text: t('component.pages.home.contact.careerDescription'),
		},
	];

	return (
		<div className={styles.contact}>
			<Title title="Contact" />
			<ul className={styles.linkList}>
				{contactItems.map((item, index) => (
					<li key={index} className={styles.link}>
						<IconLink href={item.href} {...item.bind} onClick={item.onClick}>
							{item.icon}
							<span>{item.text}</span>
						</IconLink>
					</li>
				))}
			</ul>
		</div>
	);
}
