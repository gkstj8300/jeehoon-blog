import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Contact.module.scss';
import { IconLink } from '@/components/ui/links/IconLink';
import { Title } from '@/components/ui/title';
import { useTooltip } from '@/components/ui/tooltips';
import { url } from '@/utils/url';

export const Contact: React.FC = () => {
    const { t } = useTranslation();

    const { bind } = useTooltip<HTMLDivElement>({
        content: t('component.pages.contact.emailTooltip'),
        theme: 'dark',
        closeOnClick: true,
    });

    const handleEmailCopy = useCallback((email: string) => {
        navigator.clipboard.writeText(email).then(() => {
            alert(t('component.pages.contact.emailCopy'));
        });
    }, [t]);

    const contactItems = [
        {
            icon: <MdEmail />,
            href: '#',
            text: t('component.pages.contact.email'),
            onClick: () => handleEmailCopy('gkstj8300@naver.com'),
            bind: bind
        },
        {
            icon: <FaGithub />,
            href: url.github,
            text: t('component.pages.contact.github'),
        },
        {
            icon: <FaRegUserCircle />,
            href: url.portfolio,
            text: t('component.pages.contact.portfolio'),
        }
    ];

    return (
        <div className={styles.contact}>
            <Title title='Contact'/>
            <ul className={styles.linkList}>
                {contactItems.map((item, index) => (
                    <li key={index} className={styles.link}>
                        <IconLink href={item.href} {...item.bind}>
                            {item.icon}
                            <span onClick={item.onClick}>
                                {item.text}
                            </span>
                        </IconLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Contact.displayName = 'Contact';
