'use client';

import { useReveal } from '@jeehoon/hooks';
import { PropsWithChildren } from 'react';
import styles from './Reveal.module.scss';

type Props = PropsWithChildren<{
  className?: string;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}>;

export default function Reveal({
  children,
  className = '',
  once = true,
  threshold,
  rootMargin,
}: Props) {
  const { ref, inView } = useReveal<HTMLDivElement>({ once, threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.revealIn : ''} ${className}`}
    >
      {children}
    </div>
  );
}
