import { url } from '@jeehoon/utils';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaRegUserCircle } from '@react-icons/all-files/fa/FaRegUserCircle';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import React, { useCallback } from 'react';
import styles from './Contact.module.scss';
import IconLink from '@/shared/ui/IconLink';
import Title from '@/shared/ui/Title';
import { useTooltip } from '@/shared/ui/Tooltip/Tooltip.hooks';

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
			icon: <MdEmail />,
			href: '',
			text: 'email',
			onClick: () => handleEmailCopy('gkstj8300@naver.com'),
			bind: bind,
		},
		{
			icon: <FaGithub />,
			href: url.github,
			text: 'github',
		},
		{
			icon: <FaRegUserCircle />,
			href: url.careerDescription,
			text: 'careerDescription',
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
