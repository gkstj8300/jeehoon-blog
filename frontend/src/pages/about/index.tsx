import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import { About } from '@/components/pages/About';

const AboutPage: React.FC = () => {
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

	return <About />;
};
AboutPage.displayName = 'AboutPage';

export default AboutPage;
