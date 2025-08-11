---
title: 'CSR과 SSR을 활용한 SEO 크롤링 대응처리'
regDate: '2025-03-10 16:57'
description: '업무중 SEO 크롤링 문제 리액트 프로젝트를 완료하고 SEO 크롤링이 제대로 되지 않는다는 요청을 받았어요. 확인해보니 CSR 환경으로 메타태그 내의 데이터가 완성되기 전의 데이터를 파싱하고 있는 것이 확인되었고 이에 대한 대응에 관련하여 작성해볼게요.'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/Troubleshooting.webp'
mainTag: 'SEO'
tags: ['SEO', 'CSR', 'SSR', '크롤링', 'Troubleshooting']
---

## SEO 크롤링 이슈

회사에서 진행하고있는 홈페이지 리뉴얼 개발 프로젝트가 끝나고 안정화기간 및 유지보수 과정중 SEO 개발건이 들어왔어요. 팀 동료분께서 PC버전 모바일버전 SEO 개발이 완료되고 추 후 SEO 데이터가 제대로 수집되지 않는다는 이슈사항을 받았죠. 개발자도구에서 확인해보니 데이터가 정상적으로 들어가 있는것을 확인했지만 그것은 js 혹은 서버에서 완성된 데이터였으며 현재 PC버전은 CSR, 모바일버전은 SSR로 PC버전에서만 발생했던 이슈로 메타태그 내의 데이터가 완성되기 전의 데이터를 파싱하고 있다는 것을 알게되었어요.

SEO에는 3단계의 프로세스를 지니고 있다고 하죠.

```list
1. 크롤링: 웹 크롤러가 웹페이지의 콘텐츠를 복사하여 검색엔진으로 가져온다.
2. 인덱싱: 가져온 콘텐츠를 주제별로 색인하여 보관한다.
3. 랭킹: 검색의도에 맞춰 색인된 콘텐츠에 순위를 부여한 결과를 제공한다.
```

여기서 그러면 SSR 과 CSR의 차이는 무엇일까요?

![csr_ssr.jpeg](https://d2ut7x8yqv441q.cloudfront.net/posts/1741593928191.jpeg)

### SSR이란?

SSR은 Server Side Rendering의 약자로 말 그대로 서버 측에서 데이터를 완성한 후 페이지를 정적으로 렌더링 하는 것을 의미해요. SSR의 단점으로는 특정부분 데이터가 변경이 필요하다 하더라도 전체 페이지를 새로고침을 해야한다는 단점이 있어요. 또한 서버도 데이터를 다시 받아 페이지를 만들어야 함으로 데이터의 부하 문제도 생길 수 있다고 합니다. 이러한 단점을 해결하기 위해 나온 것이 CSR, SPA의 React, Vue 라는 프레임워크에요.

### CSR이란?

CSR은 Client Side Rendering의 약자로 SSR처럼 서버에서 미리 준비하는 것이 아닌 웹사이트의 콘테츠가 Client에서 동적으로 렌더링 하는 것을 의미해요. React는 HTML의 body내 id가 root인 div태그를 Client가 동적으로 JavaScript를 통해 HTML을 만들어가는 것이에요. 즉 사용자의 요청에 따라서 해당 태그가 새로고침 없이 업데이트 되는 것을 뜻하며 이러한 형태가 SPA=Single Page Application 이죠.

이렇게 SSR과 CSR의 기본 개념을 확인했으면 이 두가지의 Redering 방식이 SEO랑 무슨 관련이 있는지 확인해보죠.

현재 SEO관련 문제의 원인이 CSR인 PC 사양의 웹 사이트를 접근하면 Client가 HTML을 구성하는 동안 크롤러 과정에서 검색엔진의 로봇이 빈페이지를 인지하지 못해 발생하는 문제였어요.

이에 대한 문제 해결 방법은 의외로 간단해요,

CSR, SSR 방식을 둘 다 사용하는 것이죠. 검색엔진은 로딩 상태나 JavaScript 실행에 의존하지 않고 완성된 HTML 구조와 메타 정보를 크롤링 하고있어요. 검색엔진 크롤러는 사용자처럼 로딩 상태를 기다리지 않으므로, SSR(Server-Side Rendering)을 통해 완전히 렌더링된 HTML 페이지를 즉시 제공해야 하죠.

이처럼 사용하게되면 다시 SSR의 단점을 가지고 오는 것이 아닌가요!?

저도 이러한 문제를 해결하기 위해서는 어떻게 해야할까 고민이 되었어요. SEO라는 기능 하나때문에 CSR 방식을 SSR 방식으로 변경하여 HTML을 렌더링 하는 것은 현재 운영중이며 안정화가 다 끝나가는 이 시점에서는 시간과 노력, 이에 따른 테스트 기간 등 많은 것들이 소모된다고 생각하여 다른 방법을 찾아보았어요. 다른 좋은 방법이 있을까 찾아보니 이때 Next의 Middleware에 대해서 확인할 수 있었어요.

그러면 Middelware란 무엇일까요?

### Next의 Middleware란?

Next.js의 Middleware는 요청(Request)과 응답(Response) 사이에 실행되는 코드로, 요청을 가로채어 특정 작업을 수행하거나 요청을 수정할 수 있는 기능이에요. 이를 통해 사용자 요청에 대한 동적 처리를 서버에서 미리 수행할 수 있다고 합니다.

이렇게 내용이 나와있네요,,,

즉 예로 localhost:3000/menu/ 라는 요청이 들어올 시 서버 단에서 해당 요청을 가로채어 특정 작업을 수행할 수 있는 것이에요.

이론적인 내용을 알았으니 이를 한번 적용시켜보죠

## 해결방법

이러한 내용을 응용하여 SEO 관련의 요청을 두 분류로 나뉘어 볼게요

```list
1. 사용자 요청 = CSR
2. 크롤링 봇 요청 = SSR
```

localhost:3000/menu/ 라는 요청이 들어왔을 때 이처럼 사용자의 요청일 경우에는 그대로 CSR 렌더링 형식으로, 크롤링 봇의 요청일 경우에는 SSR 렌더링 형식으로 분류할 수가 있죠.

사용자 요청과 크롤링 봇의 요청을 구분하기 위해서는 user-agent 에서 크롤링 봇의 요청인지 확인을 해야해요. 확인을 위해 NextRequest의 headers 내에 'user-agent'을 get 하여 크롤링 봇인지 조회을 해보죠 ( ex:bingbot, Googlebot )

```js
// src\middleware.pc.tsx
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const userAgent = request.headers.get('user-agent') ?? '';
	const regex = new RegExp('yeti', 'i');
	const isYetiBot = regex.test(userAgent);

	if (isYetiBot) {
		const url = request.nextUrl.clone();
		url.pathname = `/partial-ssr${url.pathname}`;
		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}
```

user-agent 내에 'bingbot', 'Googlebot', 'yeti'(크롤링 봇)의 값이 true일 때는 따로만든 SSR 전용 페이지로 리다이렉트 시키는 것이죠. 이처럼 Middleware를 통해 각 요청에 맞는 페이지로 리다이렉트 시키면 됩니다.

위 함수를 해석하자면 '현재 요청을 한 당신 사용자에요? 아니면 봇이에요? 사용자면 그대로 CSR로 가고 봇이면 리다이렉트해서 SSR로 가요!'

그러면 다른 방법도 있지 않냐고요?

물론 다른 방법도 있죠. 말씀드렸다시피 SSR로 변경하는 방법, history API를 활용하는 방법, React 라이브러리 활용 방법 등 다양한 방법이 있다고 하네요. 하지만 오픈 후 안정화가 완료됐는데 모든 페이지를 크롤링을 해야하는 현 상황에서 새로운 page를 만드는 것이 낫지 잘 돌아가는 기존 page의 모든 코드를 건든다는 것은 큰 모험이나 마찬가지라고 생각했어요. 상황에 따라서 방법이 달라지겠지만 현 상황에서는 이러한 방법이 최선이라고 생각했고 팀원들과의 회의 결과 이처럼 진행했어요.

```point
Middleware 적용 방법
프로젝트 최상단 루트경로, src 하위에 middleware.ts 파일을 사용하면 돼요. 즉 pages 또는 app 과 동일한 수준에 있거나 src 내부에 있으면 됩니다.
```
