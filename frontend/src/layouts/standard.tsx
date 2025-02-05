import { Layout } from '@/components/layout';
import { GetLayout } from '@/utils/types';

export const Standard: GetLayout = page => {
    return <Layout>{page}</Layout>;
}