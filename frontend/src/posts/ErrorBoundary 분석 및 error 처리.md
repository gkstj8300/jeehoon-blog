---
title: 'ErrorBoundary 분석 및 error 처리'
regDate: '2025-07-28 03:20'
description: 'React의 ErrorBoundary를 활용해 컴포넌트 단위로 오류를 감지하고 에러 상황에 유연하게 대응할 수 있는 에러 처리 패턴을 소개합니다.'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/ErrorBoundary.webp'
mainTag: 'React'
tags: ['ErrorBoundary']
---

## ErrorBoundary 를 분석 및 조사하며

리액트 프로젝트를 진행하며 에러를 감지하기 위해 ErrorBoundary를 사용하고는 해요. 저는 React의 `ErrorInfo` 혹은 `react-error-boundary` 패키지를 지금까지 사용해왔고 이전의 실무 프로젝트에서 적용하였어요.

try-catch를 통한 error 객체를 이용한 로직이 아닌 React 16 버전부터 도입된 ErrorBoundar를 통해 비동기 호출에 대한 에러 처리를 하는 것이에요.

Redux, Recoil 등의 상태관리 라이브러리를 통해 API 호출에 대한 error를 분기처리를 한다그러면 API를 호출하는 모든 컴포넌트에 해당 상태값을 조정하는 로직이 포함되어야 하기 때문에 반복되는 코드가 많아지고 불편하다는 단점을 가지고 있죠. 이 때 ErrorBoundary를 통하여 프로젝트를 감싸 하위 컴포넌트 트리에서 발생한 에러를 잡아 선언적으로 처리를 할 수 있어요.

그러면 이에 대한 예시를 살펴보죠

```ts
function MainPage() {
  return (
    <PageA />
  )
}

function PageA() {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.error.message);

  const handleClick = () => {
    dispatch(fetchData());
  };

  if(error) {
    return <div>현재 페이지에 문제가 발생하였습니다.</div>
  }

  return (
    <main>
      <h1>API 요청 테스트</h1>
      <button onClick={handleClick}>데이터 가져오기</button>
    </main>
  );
}
```

현재 위 방식은 API를 통하여 에러가 발생할 경우 error 여부를 통한 에러 컴포넌트를 렌더링 하고 있습니다.
그렇다면 이러한 방식의 에러처리는 어떠한 문제를 야기할 수 있을까요?

```list
- Redux로 에러를 전역으로 관리하면 다른 컴포넌트의 에러까지 영향을 주진 않을까?
- API 요청이 여러 개인 경우 어떤 요청에서 발생한 에러인지 구분할 수 있을까?
- 에러를 초기화하지 않으면 이전 에러가 화면에 남아 사용자 경험을 망치지 않을까?
- 에러 발생 시 전체 화면이 전환된다면 사용자는 당황하지 않을까?
```

이러한 문제점들이 발생할 수 있죠. 그러면 이러한 문제들을 해결하기 위해 ErrorBoundary를 적용해보죠.

## ErrorBoundary를 통해 API 에러를 처리하기

```ts
// ErrorBoundary
interface ErrorProps {}

interface ErrorState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {

	constructor(props: ErrorProps) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static displayName = 'ErrorBoundary';

	static getDerivedStateFromError(): ErrorState {
		return { hasError: true };
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<div>Fallback 에러발생</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
-----------------------------------------------------------
// MainPage
import ErrorBoundary from '';

function MainPage() {
  return (
    <ErrorBoundary>
      <PageA />
    </ErrorBoundary>
  )
}
```

이처럼 구성한 ErorrBoundary는 렌더링 중에 발생된 에러를 catch 하게 됩니다.
즉 ErrorBoundary로 감싸진 하위 트리에서 발생하는 catch 하는 것입니다.

이러한 개념을 확장하고 형태를 참고하여 프로젝트마다 필요한 error 성격에 따라서 다양한 ErrorBoundary를 구성할 수 있습니다.

```list
- ApiErrorBoundary – API 요청 중 발생한 에러를 감지하고 사용자에게 재시도 UI를 제공
- NetworkErrorBoundary – 오프라인 상태나 네트워크 장애에 대응
- AuthErrorBoundary – 인증 실패나 토큰 만료에 따른 리다이렉트 처리
- RootErrorBoundary – 앱 전체를 감싸는 전역 에러 처리 컴포넌트
```

에러의 종류나 위치에 따라 ErrorBoundary를 구분하면 더 유연하고 상황에 맞는 에러 대응이 가능해지겠죠.

## 마지막으로

지금까지 Redux 상태로 에러를 처리하는 방식의 한계와 ErrorBoundary를 활용한 선언적 에러 처리 방식에 대해 알아봤어요.
에러는 언제 어디서든 발생할 수 있고 이를 어떻게 효율적이고 사용자 친화적으로 처리하느냐는 프로젝트의 완성도를 크게 좌우합니다.
ErrorBoundary는 단순히 예외를 막는 도구를 넘어 에러의 종류별로 책임을 나누고 사용자 경험을 지키는 수단이 될 수 있습니다.
프로젝트의 구조나 상황에 맞게 ErrorBoundary를 유연하게 설계한다면 분명 더 탄탄하고 안정적인 앱을 만들 수 있을 것 같다고 생각이 드네요.
