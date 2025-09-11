import { Icons, Ui, useTooltip } from '@jeehoon/ui';
import { url } from '@jeehoon/utils';
import React, { useCallback } from 'react';
import styles from './Contact.module.scss';
import IconLink from '@/shared/ui/IconLink';

export default function Contact() {
	const { bind } = useTooltip<HTMLAnchorElement>({
		content: '이메일을 클릭하시면 복사가 가능합니다.',
		theme: 'dark',
		closeOnClick: true,
	});

	const handleEmailCopy = useCallback(
		(email: string) => {
			navigator.clipboard.writeText(email).then(() => {
				alert('이메일 주소가 복사되었습니다.');
			});
		},
		[]
	);

	const contactItems = [
		{
			icon: <Icons.MdEmail />,
			href: '',
			text: 'email',
			onClick: () => handleEmailCopy('gkstj8300@naver.com'),
			bind: bind,
		},
		{
			icon: <Icons.FaGithub />,
			href: url.github,
			text: 'github',
		},
		{
			icon: <Icons.FaRegUserCircle />,
			href: url.careerDescription,
			text: 'careerDescription',
		},
	];

	return (
		<div className={styles.contact}>
			<Ui.Title title="Contact" />
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
