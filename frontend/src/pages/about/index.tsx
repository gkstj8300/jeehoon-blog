import { GetServerSideProps, NextPage } from 'next';
import { About } from '@/components/pages/About';

type Props = {
	notFound: boolean;
};

const AboutPage: NextPage<Props> = ({ notFound }) => {
	if (notFound) {
		return <div>Not Found</div>;
	}

	return <About />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const notFound = false;

	return {
		props: {
			notFound,
		},
	};
};

export default AboutPage;
