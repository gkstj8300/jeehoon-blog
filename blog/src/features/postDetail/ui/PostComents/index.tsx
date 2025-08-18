import { useEffect, useRef } from 'react';
import { useSelector } from '@/shared/lib/store/hooks';
import { selectTheme } from '@/shared/lib/store/modules/common/selectors';

export default function PostComents() {
	const theme = useSelector(selectTheme);
	const ref = useRef<HTMLDivElement>(null);

	const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		// 기존에 삽입된 script 제거 (재로드 방지)
		while (ref.current.firstChild) {
			ref.current.removeChild(ref.current.firstChild);
		}

		// 새로운 script 추가
		const scriptElem = document.createElement('script');
		scriptElem.src = 'https://utteranc.es/client.js';
		scriptElem.async = true;
		scriptElem.crossOrigin = 'anonymous';
		scriptElem.setAttribute('repo', 'gkstj8300/blog-comments');
		scriptElem.setAttribute('issue-term', 'pathname');
		scriptElem.setAttribute('label', '댓글');
		scriptElem.setAttribute('theme', utterancesTheme);

		ref.current.appendChild(scriptElem);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const iframe =
			document.querySelector<HTMLIFrameElement>('.utterances-frame');
		if (iframe?.contentWindow) {
			iframe.contentWindow.postMessage(
				{ type: 'set-theme', theme: utterancesTheme },
				'https://utteranc.es'
			);
		}
	}, [utterancesTheme]);

	return <section ref={ref} />;
}
PostComents.displayName = 'PostComents';
