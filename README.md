# ⚠️ 공지
> - 현재 계속 모노레포 환경 및 개발작업 진행중입니다.
> 
> - [실험실](https://lab.baakhan.com/) 페이지 현재 개발중입니다.


## ☄️ baakhan.com: 포트폴리오
각기의 다른 프로젝트들을 baakhan.com 한 도메인에서 통합하여 운영하고 있는 포트폴리오입니다.
Resume(경력 기술서), Blog(테크 블로그), Lab(실험실) 등 각각의 앱을 모노레포로 관리시켜 개별 라우팅되도록 설정하여 개발 및 배포하고 있습니다.

## 🔗 링크
- 🌅 [메인 페이지](https://www.baakhan.com/)
- 💼 [경력 기술서](https://resume.baakhan.com/)
- 📋 [테크 블로그](https://blog.baakhan.com/)
- ⚗️ [실험실](https://lab.baakhan.com/)

## 🌫️ Jeehoon Portfolio
[baakhan.com](https://www.baakhan.com/)은 개발 기록과 인사이트를 담는 **Next.js + TypeScript** 도메인입니다. 모노레포(**Turborepo + pnpm**) 구조로 유지보수성과 확장성을 높였습니다.

<p align="left">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white">
  <img alt="Turborepo" src="https://img.shields.io/badge/Turborepo-000?logo=turbo&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-1A2C34?logo=prettier&logoColor=F7BA3E">
  <img alt="MIT" src="https://img.shields.io/badge/License-MIT-green">
</p>

## 🧰 기술 스택
- 프레임워크: Next.js (React 18)
- 언어: TypeScript
- 스타일링: Sass, Stylelint
- 블로그 마크다운: gray-matter(+ remark/rehype)
- 빌드: Turborepo, pnpm
- 배포: Vercel
- 옵션: AWS S3

## 📂 프로젝트 구조
```
jeehoon-portfolio/
├── apps
│   ├── home        # 메인 페이지
│   ├── blog        # 테크 블로그
│   ├── resume      # 경력 기술서
│   └── lab         # 실험실
└── packages
    ├── ui          # 공통 UI 컴포넌트
    ├── theme       # dark, light theme 관리
    ├── hook        # 공통 hook 함수
    └── utils       # 공통 tuils 함수
```

## 🛠️ 시작하기

### 1) 의존성 설치
```sh
pnpm install
```
### 2) 개발 서버
```sh
pnpm run dev
# 프로젝트 설정에 따라 포트가 다를 수 있습니다
```
### 3) 빌드
```sh
pnpm build
```

## ✒️ 커밋 메세지 컨벤션
```
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```

## ✍️ Blog 글쓰기 Frontmatter
```
---
title: "Next.js i18n 정리"
regDate: "2025-09-10"
description: "react-i18next로 다국어 블로그 구축기"
thumbnailImage: 'i18n.webp'
mainTag: 'i18n'
tags: ["nextjs", "i18n", "blog"]
---
```
