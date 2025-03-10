---
title: 'Batching과 상태 변경의 관계'
regDate: '2025-02-25 10:47'
description: '리액트를 공부하는 도중 기본적으로 내가 아는 프로그래밍의 구조와는 다른 것을 배웠다. React의 공식 문서에는 나와있다. useState는 비동기적으로 작동한다. 또한 이를 통하여 일괄 처리(batching) 이 무엇이며 여러 상태 업데이트를 적용하는 방법을 알 수 있다. 이를 통해 Batching과 상태 변경의 관계에 대해 알아보자'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/React.png'
mainTag: 'React'
tags: ['React','Bactching','useState']
---

## 예시
리액트를 공부하는 도중 기본적으로 내가 아는 프로그래밍의 구조와는 다른 것을 배웠다. React의 공식 문서에는 나와있다. 'useState는 비동기적으로 작동한다.' 또한 이를 통하여 일괄 처리(batching) 이 무엇이며 여러 상태 업데이트를 적용하는 방법을 알 수 있다.

```js
const [ isEditing, setIsEditing ] = useState(false);

const handleEditClick = () => {
    setIsEditing(!isEditing);
}

return (
    <li>
        <button onClick={handleEditClick}>눌러줘~</button>
    </li>
);
```

button을 클릭했을 때 isEditing의 값은 true이다.
그러면 다음 코드를 예상해보자

```js
const [ isEditing, setIsEditing ] = useState(false);

const handleEditClick = () => {
    setIsEditing(!isEditing);
    setIsEditing(!isEditing);
}

return (
    <li>
        <button onClick={handleEditClick}>눌러줘~</button>
    </li>
);
```

위 코드에서의 isEditing의 값이 무엇이 될까?
해당 코드만 확인했을 때는 기존 useState를 통하여 isEditing의 값은 false이며 onClick 이벤트가 실행되었을 때  setIsEditing(!isEditing) 을 두번 실행하여
false => true => false 즉 false 값이 나올 것이 예상된다.
하지만 예상과는 달리 isEditing의 값은 true로 처리되어 프로그램이 흘러가는 것이 확인된다.

이러한 이유를 알아보자  
  

리액트는 상태 변경 스케줄을 조율하는데 두 변화 모두 isEditing의 현재 상태를 기준으로 삼는다. 즉 시작점은 false이다 그렇기 때문에 저 두 줄 모두 isEditing가 false인 시점을 기준으로 잡힌다. 

onClick 핸들러가 React에게 지시하는 작업을 확인해보자
```
1. setIsEditing(!isEditing);
== 다음 렌더링 때 isEditing을 기존 false에서 true로 변경할 준비를 해!

2. setIsEditing(!isEditing);
== 다음 렌더링 때 isEditing을 기존 false에서 true로 변경할 준비를 해!
```

setIsEditing(!isEditing)을 두 번 호출했음에도 불구하고 이 렌더링에서의 이벤트 핸들러의 isEditing은 항상 false이므로 그저 state의 값을 true로 두 번 설정한 것이다. 이것이 이벤트 핸들러가 완료된 후 React가 컴포넌트 안에 isEditing을 false가 아닌 true로 다시 렌더링 하는 이유이다.

리액트 공식문서에 예가 있다.

```
레스토랑에 주문을 받는 직원이 있다고 가정하자 직원은 한개의 주문을 받을 때마다 주방으로 가지 않을 것이다.
주문을 마무리할 때까지 기다리고, 주문을 변경할 수 있도록 해주며 테이블에서 다른 손님들의 주문도 받을 것이다.
```

그러면 여기서 Batching이란 무엇인지 알아보자

## Bactching이란?
Bactching이란 React가 더 나은 성능을 위해 state 업데이트를 한 번은 리렌더링으로 묶어 진행하는 것을 뜻한다.
즉 여러개의 state가 업데이트 될 때마다 반복적으로 발생하는 불필요한 렌더링을 최적화 하는 것이다.
UI가 이벤트 핸들러 및 그 안에 있는 모든 코드가 완료된 후에야 업데이트 되는 것 이러한 것을 Bactching이라고 한다. 이를 통해 React 앱이 훨씬 빠르게 실행된다고 한다.


그렇다면 위 코드가 false가 나오게 하는 방법은 없을까

```js
const [ isEditing, setIsEditing ] = useState(false);

const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    setIsEditing((editing) => !editing);
}

return (
    <li>
        <button onClick={handleEditClick}>눌러줘~</button>
    </li>
);
```

(editing) => !edting 업데이트 함수를 통하여 상태 설정 함수에 전달할 때 React는 이 함수를 이벤트 핸들러 내의 모든 다른 코드가 실행된 후에 처리하기 위해 대기열에 추가한다.

해당 핸들러에 대한 작업을 확인해보면

1. setIsEditing((editing) => !editing);
== isEditing을 기존 false에서 true로 바꿨네 true를 대기열에 추가할게
2. setIsEditing((editing) => !editing)

== 이전 대기열의 값이 true네? false로 바꾸고 false를 대기열에 추가할게

이처럼 React는 이전 업데이터 함수의 반환 값을 다음 업데이터 함수로 isEditing을 전달하고, 이런 식으로 계속된다.

요약
```
- 상태를 설정하는 것은 기존 렌더링 내의 변수를 변경하지 않지만, 새로운 렌더링을 요청한다.

- React는 이벤트 핸들러가 실행된 후에 상태 업데이트를 처리합니다. 이를 일괄 처리(batching)라고 한다.

- 한 이벤트 내에서 상태를 여러 번 업데이트하려면 setIsEditing((editing) => !editing) 업데이트 함수를 사용할 수 있다.
```