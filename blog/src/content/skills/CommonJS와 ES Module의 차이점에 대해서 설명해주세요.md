---
title: 'CommonJS와 ES Module의 차이점에 대해서 설명해주세요'
regDate: '2025-05-08 18:22'
description: 'CommonJS와 ES Module의 차이점에 대해서 설명해주세요'
thumbnailImage: ''
mainTag: 'CommonJS'
tags: ['CommonJS']
---

## CommonJS와 ES Module의 차이점에 대해서 설명해주세요

CommonJS와 ES Module(ESM) 은 자바스크립트에서 모듈을 관리하고 불러오는 두 가지 주요 방식입니다.

먼저 CommonJS는 주로 Node.js 환경에서 사용되며, 모듈을 동기적으로 불러옵니다. 즉, 모듈이 로드될 때까지 다음 코드가 실행되지 않는 방식입니다. CommonJS는 require 키워드를 사용해 모듈을 가져오고, module.exports를 통해 내보냅니다. 이 방식은 주로 서버측에서 사용 됐지만, 클라이언트 환경에서도 번들러를 통해 사용할 수 있습니다.

반면, ES Module은 자바스크립트의 공식 표준 모듈 시스템으로, ECMAScript 2015(ES6)부터 도입되었습니다. ESM은 브라우저와 Node.js 환경에서 모두 사용할 수 있으며, 모듈을 비동기적으로 로드합니다. 모듈을 가져올 때는 import 키워드를 사용하고, 내보낼 때는 export를 사용합니다. 또한, ESM은 정적 분석이 가능해, 트리 쉐이킹과 같은 최적화 작업에도 유리합니다.

정리하자면, CommonJS는 주로 동기적이고 서버 측에서 많이 사용되며,ESM은 비동기적이고 브라우저와 서버 모두에서 사용할 수 있다는 차이점이 있습니다.

하지만 Node.js에서도 최근에는 ESM 사용이 증가하고 있는 추세입니다. Node.js는 버전 12부터 네이티브로 ESM을 지원하기 시작했으며, 브라우저와 서버 간의 모듈 호환성을 위해 풀스택 애플리케이션 개발에서도 ESM이 많이 사용되고 있습니다. 특히 ESM은 비동기적 로딩과 트리 쉐이킹 같은 최적화 작업에 유리하다는 점에서 점점 더 선호되고 있습니다.