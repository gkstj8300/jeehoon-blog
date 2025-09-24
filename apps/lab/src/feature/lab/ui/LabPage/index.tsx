"use client";

import { useOnMounted } from '@jeehoon/hooks';
import { Layout } from '@jeehoon/ui';
import { ga } from '@/shared/lib/logs/analytics';

export default function LabPage() {
  useOnMounted(ga.pageView.lab);

  return (
    <Layout.Notice description='현재 Lab 페이지 개발중입니다.'/>
  )
}
LabPage.displayName = 'LabPage';