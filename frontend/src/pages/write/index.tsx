import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useCallback } from 'react';
import { Write } from '@/components/pages/Write';

const WritePage: React.FC = () => {
    const [notFound, setNotFound] = useState(false);
    const { isReady } = useRouter();
    const { data: session, status } = useSession();

    const load = useCallback(async () => {
        setNotFound(false);
        const authenticate = 
            !!(
            (session?.user?.email === process.env.NEXT_PUBLIC_GITHUB_ACCESS_EMAIL ||
             session?.user?.email === process.env.NEXT_PUBLIC_GITHUB_ACCESS_GOOGLE_EMAIL) 
             && status === "authenticated");

        if(!authenticate) {
            setNotFound(true);
        }
    }, [session, status]);

    useEffect(() => {
        if (isReady) {
			load();
		}
    }, [isReady, load]);

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
