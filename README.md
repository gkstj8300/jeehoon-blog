# ※ 공지
```
현재 모노레포 리펙토링으로 인한 사이트 접속이 원활하지 않을 수 있습니다.
```

# Jeehoon Blog

## :clipboard: UI
![Image](https://github.com/user-attachments/assets/1fec83a5-eda8-4466-bd57-6f98b0ed02e3)

![Next.js](https://img.shields.io/badge/Next.js-14.2.1-blue) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue) ![Styled with Sass](https://img.shields.io/badge/Styled_with-Sass-pink)

개인 블로그 프로젝트로, Next.js와 TypeScript를 기반으로 마크다운을 활용한 게시글 작성 및 관리 기능을 제공합니다.


## 🚀 주요 기능
- **마크다운 기반 블로그**: gray-matter를 활용하여 마크다운 파일을 변환 및 렌더링
- **게시글 작성 페이지**: 웹에서 직접 마크다운 게시글을 작성 및 업로드 가능
- **i18n 지원**: 다국어 지원을 위해 react-i18next 사용
- **스타일 관리**: Sass와 Stylelint를 활용한 코드 컨벤션 유지
- **AWS S3 연동**: 게시글 및 리소스를 AWS S3에 업로드 가능
- **SEO 최적화**: Next.js의 기본 SEO 기능 활용


## 📂 프로젝트 구조
```
jeehoon-blog/
├── public/              # 정적 파일
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── pages/           # Next.js 페이지
│   ├── styles/          # 스타일 파일
│   ├── utils/           # 유틸리티 함수
│   ├── hooks/           # 커스텀 훅
│   ├── services/        # API 및 데이터 관리
│   ├── config/          # 환경 설정 파일
├── tools/               # i18n 스캐너 및 기타 도구
├── .eslintrc.json       # ESLint 설정
├── .stylelintrc.json    # Stylelint 설정
├── package.json         # 프로젝트 의존성 및 스크립트
└── tsconfig.json        # TypeScript 설정
```


## 🛠️ 개발 환경 설정
### 1. 프로젝트 클론
```sh
git clone https://github.com/your-username/jeehoon-blog.git
cd jeehoon-blog
```
### 2. 의존성 설치
```sh
npm install
```
### 3. 개발 서버 실행
```sh
npm run dev
```
- 기본적으로 `http://localhost:3010`에서 실행됩니다.

## ✅ 코드 스타일
코드 품질 유지를 위해 아래 도구를 사용합니다:
- **ESLint**: `npm run lint`
- **Prettier**: `npm run prettier:validation-only`
- **Stylelint**: `npm run stylelint:validation-only`


## 📜 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.


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
