import { Layout } from '@/components/layout/Layout';
import { GetLayout } from '@/utils/types';

export const Standard: GetLayout = page => {
    return <Layout>{page}</Layout>;
}