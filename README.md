# Prography 10th Frontend

---

## 📦 기술 스택

- **프레임워크 & 라이브러리**
  - React `18.2.0`
  - Styled-components
- **개발 환경**
  - TypeScript
  - ESLint
  - Prettier
  - React Scripts
  - Axios

---

## 🚀 프로젝트 실행 방법

### 1️⃣ **프로젝트 클론**

```sh
git clone https://github.com/gkstj8300/prography-10th-frontend.git
cd prography-10th-frontend
```

### 2️⃣ **패키지 설치**

```sh
npm install
```

### 3️⃣ **개발 서버 실행**

```sh
npm start
```

- `http://localhost:3000`에서 실행됩니다.

### 4️⃣ **프로덕션 빌드**

```sh
npm run build
```

- 최적화된 빌드 파일이 `build/` 폴더에 생성됩니다.

### 5️⃣ **ESLint & Prettier 적용**

```sh
npm run lint
```

- `ESLint`와 `Prettier`를 실행하여 코드 스타일을 자동 정리합니다.

---

## 📂 프로젝트 구조

```
prography-10th-frontend/
│── src/
│   ├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── hooks/         # 커스텀 훅
│   ├── pages/         # 페이지 단위 컴포넌트
│   ├── pages/         # 라우팅 컴포넌트
│   ├── styles/        # 전역 스타일 관리
│   ├── utils/         # 유틸리티 함수
│   ├── App.tsx        # 메인 컴포넌트
│   ├── index.tsx      # React 렌더링 진입점
│
│── public/            # 정적 파일 (favicon, index.html 등)
│── .eslintrc.json     # ESLint 설정 파일
│── .prettierrc.js     # Prettier 설정 파일
│── package.json       # 프로젝트 의존성 및 스크립트
│── README.md          # 프로젝트 문서
```

## :clipboard: 구현

### UI
![Image](https://github.com/user-attachments/assets/39a5b9ca-dee3-4955-8207-0e6d37c2575f)

### 페이지 구성
🔹 홈 (리크루팅 안내 및 소개 페이지)
홈 페이지의 UI와 레이아웃을 어떻게 구성할지 고민하던 중 프로그라피 홈페이지의 검정색 모던한 분위기와 깔끔하고 직관적인 UI가 인상적이었습니다.
이에 따라 홈뿐만 아니라 지원 페이지 역시 프로그라피 스타일을 참고하여 통일감 있는 디자인을 적용하면 어떨까? 라는 생각을 하게 되었습니다.
배경 색상은 #000, 포인트 색상은 #fa2454로 설정하여 기존에 가지고 있던 세련된 느낌을 강조하였습니다.

🔹 리쿠르팅 퍼널 페이지 (지원 완료 페이지 포함)
리쿠르팅 퍼널 페이지(지원 페이지)는 총 4단계(Step)로 구성되었습니다.
```
Step 1: 개인정보 수집 동의
Step 2: 기본 정보 입력
Step 3: 지원 정보 입력
Step 4: 지원 완료
```
각 단계별로 개별 컴포넌트를 생성하였으며 한 단계의 입력을 완료하면 다음 단계의 컴포넌트가 나타나도록 설계했습니다.
이때 컴포넌트 전환이 자연스럽도록 애니메이션 효과를 적용하면 좋겠다고 판단하여 framer-motion 라이브러리를 사용해 단계별 화면 전환에 애니메이션을 추가하였습니다.

### 필수입력 항목 처리
요구사항에서는 '각 단계별 필수 조건 값을 입력하지 않으면 경고 표시 및 알림이 제공되어야 한다.'고 명시되어 있지만 저는 경고나 알림을 표시하는 대신 필수 값을 입력해야만 다음 단계로 넘어갈 수 있도록 구현하였습니다.


## :computer: 커밋 메세지 컨벤션

```
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```