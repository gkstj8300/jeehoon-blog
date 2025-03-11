import { GetServerSideProps, NextPage } from 'next';
import { About } from '@/components/pages/About';
import { Meta } from '@/components/pages/About/Meta';

type Props = {
	notFound: boolean;
};

const AboutPage: NextPage<Props> = ({ notFound }) => {
	if (notFound) {
		return <div>Not Found</div>;
	}

	return (
		<>
			<Meta />
			<About />
		</>
	);
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
