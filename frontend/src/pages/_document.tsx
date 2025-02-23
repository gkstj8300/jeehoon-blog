import RawDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends RawDocument {
	render() {
		return (
			<Html lang="ko" className='jeehoon'>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta httpEquiv="content-style-type" content="text/css" />
					<meta httpEquiv="content-script-type" content="text/javascript" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default Document;
