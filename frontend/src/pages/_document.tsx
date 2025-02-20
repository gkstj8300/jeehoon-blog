import RawDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends RawDocument {
	render() {
		return (
			<Html lang="ko" className='jeehoon'>
				<Head>
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
