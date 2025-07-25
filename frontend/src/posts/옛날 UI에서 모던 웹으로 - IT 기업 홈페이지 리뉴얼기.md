---
title: "회사의 얼굴을 만드는 일 - IT 기업 홈페이지 리뉴얼기"
regDate: "2025-05-01 22:43"
description: '개발 경력이 많지 않은 상황에서 이사님의 신뢰로 맡게 된 사내 홈페이지 리뉴얼 프로젝트. 기획, 디자인, 개발, 배포까지 모든 과정을 주도하며 얻은 기술적 성장과 개발자로서의 자신감을 키운 특별한 경험담'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/homepage.webp'
mainTag: '회고'
tags: ['프로젝트', '회고']
---

## 사내 홈페이지 신규개발
한화생명 프로젝트에서 철수한 뒤 회사 홈페이지를 새롭게 만드는 프로젝트를 진행하였어요. 저를 많이 아껴주시는 이사님께서 제 주도하에 내부 직원들과 홈페이지를 구축하라고 전달하셨고 저는 홈페이지를 기획 및 개발까지 모두 참여하였어요. 기존 홈페이지 UI는 정말 오래된 옛날 홈페이지의 UI이었고 동료 2분과 함께 총 3명에서 사내 홈페이지를 개발했죠.

가장먼저 홈페이지를 개발할 때 요구사항은 세가지였어요.

```list
1. 관리자페이지를 통하여 홈페이지를 관리할 수 있도록 함
2. 최신 트렌드 홈페이지에 맞게 스크롤링을 통한 UI가 구성될 수 있도록 함
3. 한글, 영문페이지가 있도록 함
```

이러한 요구사항이 들어왔고 IT 회사에 맞게 홈페이지의 템플릿과 레퍼런스 찾아갔죠. 레퍼런스를 찾았으면 홈페이지의 사이트맵을 최대한 자세히 만드려고 했어요.

### 사내 홈페이지 기획단계
![사이트맵.webp](https://d2ut7x8yqv441q.cloudfront.net/posts/사이트맵.webp)

이처럼 구체적으로 전체 페이지를 잡고 회사의 얼굴이 될 메인페이지와 각 서브페이지를 기획하였어요. 각 사업부 부장님들에게 부서를 소개할 페이지들에 사진 및 자료들을 요청하였어요.

![메인페이지.webp](https://d2ut7x8yqv441q.cloudfront.net/posts/1750089218492.webp)

다행이라 생각했던 것이 로그인하고, 무엇을 판매하고, 구매 및 글을 작성하고 이러한 이커머스 속성이 없는 홈페이지며 회사를 얼마나 아름답게 표현할 수 있느냐만 홈페이지에 담기만 하면 되기때문에 복잡하고 어려운 기능들이 없었어요. 즉 홈페이지의 UI 디자인적 요소가 가장 중요한 것이죠.

### 관리자 페이지 CMS 도입 및 개발
요구사항 중 첫 번째! CMS 연동 및 콘텐츠 관리 기능 개발을 하는 것이죠. 이렇게 메인페이지와 서브페이지 설계가 완료되었으면 이제 본격적으로 관리자 페이지를 만들어야 했어요.

![cms.webp](https://d2ut7x8yqv441q.cloudfront.net/posts/1750089963121.webp)

관리자 페이지는 이전 OJT 프로젝트 때 만들었던 CMS 시스템을 참고하여 개발 기간을 최대한으로 단축시킬 수 있도록 했어요. 처음부터 새로 개발하는 것보다는 기존에 검증된 구조를 활용하는 것이 효율적이라고 판단했거든요.

관리자 페이지에서의 핵심 기능은 데이터를 필요로 하는 모든 페이지를 실시간으로 관리할 수 있도록 하고 개발자의 도움 없이도 간단한 수정이 가능하도록 하는 것이었어요. 구체적으로는 메인 페이지의 배너 사진 및 문구를 손쉽게 변경할 수 있도록 하고 각 메뉴와 서브메뉴의 텍스트는 물론 페이지 내에 있는 모든 사진들을 드래그 앤 드롭으로 변경이 가능하도록 만들었어요. 또한 메뉴 구조 자체도 관리자가 직접 추가, 삭제, 순서 변경할 수 있도록 트리 구조로 설계했죠.

이렇게 구현한 이유는 향후 마케팅팀이나 기획팀에서 홈페이지 내용을 업데이트할 때마다 개발팀에 요청하지 않아도 되도록 하기 위해서였어요. 실제로 완성 후에는 비개발자도 쉽게 사용할 수 있다는 피드백을 받을 수 있었죠.

### 홈페이지에 CMS 기능을 통합하여 개발을 진행하자
CMS 구축이 완료되었다면 홈페이지를 만들어 봐야겠죠? CMS를 통하여 기획단계에서 구성하였던 레퍼런스와 각 사업부에서 받은 사진들과 자료를 통하여 넣었던 데이터들을 통하여 메인페이지와 각 서브페이지를 개발하였어요. 커다란 기능들은 존재하지 않아 CSS에만 집중하면 됐었죠. 하지만 요청사항 중 두 번째, `최신 트렌드 홈페이지에 맞게 스크롤링을 통한 UI가 구성될 수 있도록 함` 회사의 얼굴이 될 수 있는 메인페이지를 만드는데 많은 시간을 사용했어요. swiper.js 라이브러리를 사용하여 메인 배너를 만들었고 아이패드의 특정 어플을 이용하여 각각의 사업부의 텍스트가 들어가있는 SVG 파일을 직접 만든 뒤 scrollmagic 라이브러리를 이용하여 스크롤을 내릴 때 애니메이션 효과를 주었어요.

```point
- Swiper.js 이란?
모바일 및 데스크탑에서 사용할 수 있는 모던한 터치 슬라이더 라이브러리에요.

- ScrollMagic 이란?
스크롤 이벤트에 따라 애니메이션을 제어하는 JavaScript 라이브러리에요.
```

아직 끝난게 아니죠. 어떻게 보면 가장 시간이 오래 걸렸고 손이 많이 가는 반응형 작업이 남았어요.

이전 회의 때 팀원들과 논의한 결과, 반응형 사이트 기준을 PC, Tablet, Mobile 이렇게 3개 디바이스를 기준으로 잡고 반응형 작업에 들어갔어요. 미디어 쿼리는 `max-width: 1280px (PC)`, `max-width: 1024px (Tablet)`, `max-width: 768px (Mobile)` 이렇게 max-width 값을 기준으로 설정해서 개발을 진행했죠.

사실 반응형 작업이 가장 까다로운 이유는 각 디바이스마다 레이아웃을 다시 구성해야 하고 특히 이미지 크기나 텍스트 배치, 메뉴 구조 등을 모두 다르게 조정해야 하기 때문이에요. PC에서는 가로로 배치된 요소들이 모바일에서는 세로로 쌓여야 하고, 네비게이션도 햄버거 메뉴로 바뀌어야 하죠. 단순히 크기만 줄이는 게 아니라 터치 환경에 맞게 버튼 크기를 조절하고 모바일에서는 스크롤 방향도 고려해서 UI를 재배치했어요. 이렇게 설명하다보니 정말 힘들었던 기억이네요...

이제 마지막 요구사항인 다국어 페이지 기능! 쿠키값(ko, en)을 활용하여 다국어 전환이 가능하도록 구현했어요. 페이지 번역은 사내에 영어을 잘 하시는 분에게 번역을 부탁드렸죠. 마지막으로 검색 엔진 최적화를 위해 각 페이지별로 title, description, keywords 등 Meta 태그들을 꼼꼼히 삽입했어요. 자 이제 끝이 보이네요.

### 대표님과 부장님들에게 컨펌을 받자
홈페이지의 UI와 구성이 끝난 뒤 대표님과 부장님들에게 컨펌을 받는 회의일정을 잡게되었어요. 이러한 과정의 이유는 각 사업부마다 개선사항이 분명히 있을 것으로 생각되어 회의를 진행하게 되었죠. 다행이도 큰 변경사항이 없이 오픈을 할 수 있게되었어요. 회의 때 변경될 회사 홈페이지를 소개하는데 얼마나 떨리던지 그 날 대표님과 함께하던 점심식사.. 음식이 목 넘어로 잘 안 넘어갔는데 잘 먹는다고 공깃밥 한 공기를 더 묵묵히 주문해주셨던 것이 기억나네요.

### 언제 오픈해도 상관없죠~
도메인같은 경우 기존에 사용하고 있던 카페24의 도메인을 그대로 이용하였어요. 배포를 진행할 때 무중단 배포(Root 파일 교체 방식)을 이용하면 되기 때문에 큰 어려움은 없었어요. 혹여나 운영서버에서 이슈사항이 발생할 수 있음으로 사용하지 않는 도메인을 개발서버로 이용하여 테스트를 진행하였어요.

## 마무리
개발 경력이 많지 않은 저에게 이런 프로젝트를 주도할 수 있게 해주신 이사님에게 감사하면서도 부담을 많이 갖게 됐어요. 개인 프로젝트가 아닌 회사의 얼굴이 되며 내가 회사를 떠난다고 해도 커밋 히스토리와 주석에 저의 이름이 적혀있으므로 보다 더 완벽하게 할 수 있길 원했어요. 프로젝트를 진행하면서 가벼운 마음으로 임한적이 한번도 없었으며 이러한 다짐들이 아웃풋을 만들고 자신감을 북돋아주었어요. 부담은 되었지만 정말 행복하고 즐겁게 개발을 했어요. 제가 지금까지 좌절하지 않고 개발을 할 수 있었던 이유도 해당 프로젝트 경험이 있기 때문이 아닐까 할 정도로요. 같이 프로젝트를 진행했던 사내 직원분들이랑은 자주 만날 정도로 친한 사이가 되었죠.