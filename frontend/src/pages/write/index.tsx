import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import { Write } from '@/components/pages/Write';

const WritePage: React.FC = () => {
    const [notFound, setNotFound] = useState(false);
    const { isReady } = useRouter();

    const load = useCallback(async () => {
        setNotFound(false);
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    if (!isReady) {
        return null;
    }

    if (notFound) {
        return <div>Not Found</div>;
    }

    return <Write />;
};
WritePage.displayName = 'WritePage';

export default WritePage;
