export const project = {
	title: '프로젝트',
	hanwha: {
		name: '한화생명',
		projectName: '코어 시스템 구축 프로젝트',
		durationStart: '2022-06',
		durationEnd: '2022-12',
		skillKeywords: 'Java,Javascript,Oracle,KendoUI,JobPass,TeraStream',
		development: `수수료 확인/계산 등 업무 흐름에 기반한 신규 화면 설계 및 UI 구현<br />
									기존 수작업 기반 배치 시스템을 JobPass + TeraStream 기반 ETL 시스템으로 전면 재구축<br />
									DD(DB to DB), FD(File to DB) 방식 지원에 따라 다양한 데이터 유형의 적재 처리<br />
									수수료 프로세스 전반 개발 및 유지보수 담당<br />
									보험 정책 변경에 따른 로직 유지보수 및 재정비 주도`,
	},
	naedam: {
		name: '내담씨앤씨',
		projectName: '사내 홈페이지 신규개발',
		durationStart: '2022-12',
		durationEnd: '2023-03',
		skillKeywords: 'Java,Spring Boot,Javascript,Jquery,MariaDB',
		development: `사내 홈페이지 전면 리뉴얼 기획 및 설계<br />
									사내 요구사항에 맞춰 CMS 관리자 페이지를 개발, 이미지·텍스트·공지사항을 실시간 관리 가능하도록 구현<br />
									글로벌 파트너 사용성을 위한 쿠키 기반 다국어 전환(국문/영문) 기능 개발<br />
									데스크톱·태블릿·모바일 전 디바이스 대응 반응형 UI 적용 및 최신 스크롤 인터랙션(Parallax, Fade-in 등) 도입으로 시각적 몰입감 강화`,
	},
	misumiMaintenance: {
		name: '한국미스미',
		projectName: '성능 개선 및 기능 구현',
		durationStart: '2023-04',
		durationEnd: '2024-04',
		skillKeywords: 'Php,Rxjs,Twig,Javascript,Jquery',
		development: `GA4 기반 PV(Page View) 및 주요 사용자 이벤트(장바구니 추가, 주문, 검색 등) 트래킹 설계 및 적용<br />
									UI/UX 개선 및 사용자 경험 최적화를 통한 콘텐츠 시선 흐름, 마우스 동선(Click Heatmap, Scroll Depth) 분석 후 UI 리뉴얼 반영 상품 상세 페이지 기준 체류시간 평균 18% 증가, 이탈률 약 11% 감소<br />
									Groobee 솔루션 기반 개인화 추천 알고리즘 도입, 각 페이지에 상품 추천 배너 삽입 추천 배너를 통한 재방문율 15% 증가, 구매 전환율 약 8% 상승`,
	},
	misumiRenewal: {
		name: '한국미스미',
		projectName: '이커머스 플랫폼 마이그래이션',
		durationStart: '2024-05',
		durationEnd: '2025-03',
		skillKeywords: 'React,TypeScript,Next.js,Redux,Sass,Styled-components',
		development: `RxJS, Twig 기반 10년 된 레거시 플랫폼(월간 트래픽 약 40만 UV)을 React, TypeScript, Next.js 기반으로 전환<br />
									Intersection Observer, Lazy Load, CDN(S3+CloudFront) 도입<br />
									LCP 기준 레거시 페이지 대비 로딩 속도 3.5초 → 1.4초 (60% 단축), 사용자 이탈률 42% → 27% (15% 감소)<br />
									_app.pc.tsx / _app.mobile.tsx 분리, 기기별 최적화 아키텍처 적용<br />
									상품 비교 기능 및 전용 비교 페이지 개발 및 비교 기능 활용한 상세 페이지 유입률 27% 증가, 구매 전환율 12% 상승<br />
									공통 UI 컴포넌트 라이브러리 개발을 통한 UI/UX 일관성 확보 및 신규 페이지 개발 속도 평균 30% 단축<br />
									주요 사용자 플로우인 헤더, 메인 페이지, 플로팅 바 등 핵심 영역 개발 및 리뉴얼<br />
									AA 및 GA 연동 및 데이터 분석 기능 개발`,
	},
} as const;
