---
title: "Php, RxJS에서 React, TypeScript로의 대전환 - 이커머스 리뉴얼 실무 경험 2편"
regDate: "2025-06-02 03:19"
description: '낯선 기술 스택 습득부터 모던 프론트엔드 리뉴얼까지. PHP/RxJS/Twig 환경에서 React/TypeScript로의 대전환 프로젝트를 통한 개발자 성장 스토리!'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/part2.webp'
mainTag: '회고'
tags: ['프로젝트', '회고']
---

## React를 실무에서 개발할 수 있는 경험을 하다니
리뉴얼 개발 프로젝트의 개발 환경은 크게 `React, TypeScript, Next.js, Redux`로 구성되어 있어요. 현재 가장 인기 있고 실제로 많이 쓰이는 기술들이라 그런지 굉장히 설레기도 했고 한편으로는 긴장도 많이 됐죠.

각 기술은 단순히 강의에만 의존하지 않고 강의나 유튜브로 기초를 다진 다음 공식 Document를 최대한 많이 참고하려고 했어요. 그리고 공부한 내용을 바탕으로 동일한 환경의 간단한 개인 프로젝트도 직접 진행해봤어요. 그렇게 공부하다 보니 처음엔 많이 어렵던 것들도 점점 익숙해졌어요. 이 날을 위해서 지금까지 운영과 유지보수의 과정들과 그동안 해왔던 공부와 스터디, 개인프로젝트들이 빛을 밝힐 시간이었죠.

프로젝트 초반과는 다르게 PM님께서는 저에게 많은 부분을 개발할 수 있도록 맡겨주었죠. 덕분에 다양한 경험을 할 수 있었고 개발에 대한 자신감도 조금씩 쌓였어요.

그러면 리뉴얼 프로젝트에서 제가 맡게 된 주요 개발 항목들도 정리해볼게요.

## 내가 맡은 기능과 영역들

```list
* 공통 Header 개발: 로고, 문구, 견적/주문, 장바구니, 문의,로그인/로그아웃 등 구현
* 카테고리 페이지 및 서브·말단 카테고리 UI 설계 및 개발
* 검색 기능 개발: 검색창, 주문, 장바구니, 배너, 상품 정보 미게재 주문 지원
* 공통 플로팅 바 구현: 상품 추천, CAD, 비교하기, 견적/주문 등 기능 개발
* 공통 유저 기능 개발: 권한 관리, 가격 확인, 장바구니, 마이부품표, 회원 정보 및 배송 정보 관리
* 메인 페이지 설계 및 개발
* 브랜드 페이지 UI 개발
* 상품 비교 기능 및 비교 페이지 구현
* AA 및 GA 연동 및 데이터 분석 기능 개발
```

![메인페이지.webp](https://d2ut7x8yqv441q.cloudfront.net/posts/1750102461514.webp)

홈페이지를 개발할 때는 영역별로 우선순위가 있죠. 해당 리스트를 참고해서 1순위, 2순위를 정하면 모든 페이지에 공통으로 들어가야 하는 Header, 플로팅 바, 공통 유저 기능 같은 것들이 1순위가 되고 그 외 기능들은 2~3순위로 나뉘게 됩니다. 그래서 제가 맡은 공통 컴포넌트들을 빠르고 완성도 높게 개발해야 이후 다른 기능들도 문제없이 진행될 수 있었어요.

리뉴얼 프로젝트는 PC버전과 Mobile버전으로 구분되어 있었고 각 버전별로 따로 개발을 진행해야 했어요. 로컬스토리지를 활용해 사용자의 디바이스 정보를 저장하고 Next.js를 기준으로 _app.tsx 파일을 _app.pc.tsx, _app.mobile.tsx처럼 구분해서 각 디바이스에 맞는 타겟을 호출할 수 있도록 설정했어요. 버전이 분리되다 보니 파일 수도 많아지고 자연스럽게 속도 문제가 생길 수 있었는데 이런 부분을 고려해서 공통 모듈, UI 컴포넌트, 공통 함수 등 자주 사용하는 부분은 최대한 모듈화하려고 노력했어요.

### 렌더링 속도를 빠르게
이커머스 특성상 이미지가 많이 보여질 수밖에 없다고 생각해요. 그 중 메인페이지와 카테고리 페이지는 한 페이지에 최대 100개가 넘는 이미지가 로드되어 렌더링 속도 저하문제가 심했죠. 그러면 이미지로 인해 발생하는 속도 저하 문제는 어떻게 해결하는 것이 좋을까요?

```list
Amazon S3 + CloudFront CDN 도입
```

첫 번째로는 이미지 서빙 방식의 개선이었어요. 기존에는 모든 정적 파일을 웹 서버에서 직접 제공하고 있었는데 이렇게 되면 서버에 부하가 집중되면서 전체적인 응답 속도가 느려질 수밖에 없었어요. 

Amazon S3에 모든 이미지 파일을 업로드하고 CloudFront CDN을 통해 전 세계 어디서든 빠르게 접근할 수 있도록 구성했어요. CDN의 장점은 사용자와 가장 가까운 서버에서 이미지를 제공하기 때문에 물리적 거리로 인한 지연시간을 최소화할 수 있다는 점이죠.

```ts
// 이미지 URL 구성 예시
const getOptimizedImageUrl = (imagePath, width = 300) => {
    return `https://cdn.cloudfront.net/images/${imagePath}?w=${width}&q=80`;
};
```

두 번째로는 두 번째는 지연 로딩(Lazy Loading) 전략이었어요. 모든 이미지를 한꺼번에 로드하는 게 아니라 사용자가 실제로 보게 될 이미지만 우선적으로 로드하는 방식으로 변경했어요.

페이지 내 컴포넌트들을 다음과 같이 우선순위를 나누어 처리했어요

```list
* 1순위 (즉시 로드)
  - 메인 배너 이미지
  - 로고 및 네비게이션 아이콘
  - 첫 화면에 보이는 상품 이미지

* 2순위 (조건부 로드)
  - 스크롤 시 나타나는 상품 이미지들
  - 탭 전환 시 보이는 이미지들

* 3순위 (필요시 로드)
  - 모달이나 팝업 내 이미지들
  - 하단 푸터 영역 이미지들
```

다음으로는 Intersection Observer API를 활용한 동적 이미지 로드에요. 사용자가 스크롤해서 특정 이미지가 뷰포트에 들어올 때까지는 실제 이미지를 로드하지 않고 들어오는 순간에 로드하는 방식이죠.

```ts
// Intersection Observer 구현 예시
const useImageLazyLoading = () => {
    const [imageRef, setImageRef] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!imageRef) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isLoaded) {
                setIsLoaded(true);
                observer.disconnect();
                }
            },
            { 
                threshold: 0.1 
            }
        );

        observer.observe(imageRef);
        return () => observer.disconnect();
    }, [imageRef, isLoaded]);

    return { setImageRef, isLoaded };
};
```

이러한 작업들을 통해 초기 렌더링 속도를 체감될 정도로 단축시킬 수 있었어요. 다시 생각해보니 뿌듯하네요.

### 공통 UI 컴포넌트를 통해 보다 더 효율성있게
리뉴얼 전 기존 사이트는 UI의 일관성이 없어 아쉬운 점이 많았어요. 버튼, 체크박스, 셀렉트 박스 등 조금씩 제각각인면이 있었죠. 여기서 React의 장점들이 빛을 발하죠.

```list
- 재사용성: 한 번 만든 컴포넌트를 여러 곳에서 반복 사용 가능
- 모듈화: 각 UI 요소를 독립적인 모듈로 관리
- 조합 가능: 작은 컴포넌트들을 조합해서 복잡한 UI 구성
```

이러한 장점을 통해 공통 UI 컴포넌트를 구성해 보았어요.

```ts
// Button 테마
const Themes = [
	'strong',
	'primary',
	'default',
	'sub',
	'secondary',
] as const;
export type Theme = (typeof Themes)[number];

// Button 아이콘
export const Icons = [
	'arrow',
	'order',
	'cart',
	'check',
	'plus',
	'minus',
	'comment',
] as const;
export type Icon = (typeof Icons)[number];

// Button 아이콘 위치
export const IconPosition = ['left', 'right'] as const;
export type IconPosition = (typeof IconPosition)[number];

export type ButtonProps = ButtonBaseProps & {
	theme?: Theme;
	icon?: Icon;
	iconPosition?: IconPosition;
};
```

이처럼 각각의 UI 컴포넌트를 공통으로 사용할 수 있게끔 타입을 지정하고 스타일링을 해주면 도입 후 개발 속도도 빨라지고 디자인의 일관성으로 보기도 좋아진다고 생각해요. 또한 유지보수에도 장점이 증가하겠죠? 예를 들면 "모든 버튼의 모서리를 좀 더 둥글게 만들어달라"는 요청이 들어왔을 때 Button 컴포넌트 한 곳만 수정하면 전체 사이트에 일괄 적용이 되기 때문에 간편해지죠.

### 상품 비교 기능과 비교 페이지를 만들어보자

한국미스미는 제조업의 자동화·효율화를 위한 모든 부품 판매하는 기업이에요. 일반적인 상품들과는 다르게 각 부품의 스펙이 mm 단위로 쪼개지고 다양하죠. 또한 이러한 스펙들을 통해서 가격도 천차만별이라 비교할 수 있는 기능이 도입된다면 사용자들은 좀 더 효율적으로 이용할 수 있겠죠.

상품 비교 버튼의 위치와 동작 상품을 비교할 수 있는 비교 버튼은 상품 상세 페이지에 위치해 있어요. 사용자가 해당 페이지에서 원하는 모든 스펙(사이즈, 재질 등)을 설정하고 '비교' 버튼을 클릭하면, 해당 상품이 비교 리스트에 추가되는 방식이죠.

![플로팅 바 비교 팝업.webp](https://d2ut7x8yqv441q.cloudfront.net/posts/1750105549724.webp)

비교 상품 관리 시스템 최대 5개까지의 상품을 동시에 비교할 수 있도록 제한을 두었고, 선택된 비교 상품들은 모든 페이지 하단에 고정된 플로팅 바를 통해 실시간으로 확인할 수 있어요. 사용자가 어떤 페이지를 이동하더라도 비교 리스트가 유지되어 편리하게 상품들을 관리할 수 있도록 했죠.

Redux와 LocalStorage 기반 상태 관리 상품 비교 기능은 Redux와 LocalStorage를 조합한 방식으로 개발했어요. Redux를 통해 앱 전체에서 비교 상품 상태를 관리하고, LocalStorage에 데이터를 저장해서 브라우저를 새로고침하거나 재방문해도 이전에 선택한 비교 상품들이 그대로 유지되도록 구현했어요. 또한 Date 인터페이스를 사용해 일정 시간이 지나면 자동으로 초기화될 수 있게끔 설정해 놓았죠.

```ts
// 비교 Redux 일부 예시

export const loadCompare = (sdispatch: Dispatchtore) => {
    const compare = localStorage.getItem('compare');
    if (!!compare) {
        return () => {
            dispatch(compareAction.update(compare));
        };
    }
    return () => { return dispatch(compareAction.update([]));}
}

const slice = createSlice({
    name: 'compare';
    reducers: {
        update(state, action: PayloadAction<CompareProduct[]>) {
			return {
				...state,
				compare: action.payload,
			};
		},
    }
});
```

전역 접근 가능한 UI 플로팅 바는 모든 페이지에서 필수적으로 표시되는 고정 영역으로 설계했어요. 이를 통해 사용자가 사이트 어디에서든 비교 상품을 관리할 수 있도록 했죠.

다양한 관리 기능 제공 플로팅 바에서는 다음과 같은 기능들을 제공해요:

```list
개별 상품 삭제: 특정 상품만 비교 리스트에서 제거
전체 삭제: 비교 리스트의 모든 상품을 한 번에 삭제
개별 선택: 원하는 상품만 선택해서 비교 페이지로 이동
전체 선택: 리스트의 모든 상품을 선택
비교 실행: 선택된 상품들의 상세 비교 페이지로 이동
```

이렇게 구현된 상품 비교 기능을 통해 사용자들이 여러 상품의 스펙을 체계적으로 비교하고 최적의 선택을 할 수 있도록 도움을 주었어요


### 지훈 주임님 SEO 데이터 수집이 되질 않아요.
```point
SEO 크롤링 문제 해결 과정은 아래 URL의 게시글에 정리해 놓았어요!
```
https://www.baakhan.com/posts/CSR과-SSR을-활용한-SEO-크롤링-대응처리/


## 마무리
모든 프로젝트의 경험은 개발자라는 길에 있어서 뼈와 살이 되는 것 같아요. 제가 요즘에 스스로에게도 하는 말이며 고민을 갖고 있는 분들에게 항상 하는 말이 있어요.
`기회는 찾아오는 것이 아니며 계속 움직이는 나에게 다가오는 것이다.`
마지막 프로젝트를 진행하면서 스스로에게 부족한 부분이 보이며 제자리인 느낌이 계속 들었어요. 저는 이 순간에도 가만히 방황하지 않으며 무엇인가 하려고 했죠. 이것이 독서일 수도 개인 프로젝트가 될 수도 있죠. 저는 진행했던 React 프로젝트를 복습하고 제 것으로 만들고싶어 같은 환경으로 경력기술서와 지금의 블로그를 만들었죠. 바위처럼 클 수도 소금처럼 작을 수도 있지만 이렇게 쌓다보면 언젠가는 제가 원하는 탑의 모양이 나오지 않을까요?