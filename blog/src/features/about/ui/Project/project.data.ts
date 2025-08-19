export const project = {
	title: 'Project',
	hanwha: {
		name: '한화생명',
		projectName: '코어 시스템 구축 프로젝트',
		durationStart: '2022-06',
		durationEnd: '2022-12',
		skillKeywords:
			'Java,Javascript,Servlet,Apache,Oracle,KendoUI,GitLab,JobPass,TeraStream,ETL',
		description: `레거시 청산 및 프론트엔드 신규 개발<br />
                      FP 수수료 지급 프로세스 ETL 배치 프로세스 개발<br />
                      AS-IS, TO-BE 마이그레이션<br />
                      인터페이스 실행 및 데이터 검증`,
		development: {
			develop1: {
				type: 'Feature',
				name: 'ETL 프로그램 전환 및 레거시 시스템 전면 개편',
				developmentStart: '',
				developmentEnd: '',
				description: `TeraStream, JobPass 등 신규 ETL 프로그램을 도입하면서 기존 배치 프로그램을 신규 시스템에 맞춰 전면 재개발<br />
                              시스템 간 데이터 전송을 위한 배치 인터페이스를 구현하였으며, 실제 운영 환경에서 데이터가 정확하게 전달되도록 다각도의 검증 로직을 설계 및 적용.`,
			},
			develop2: {
				type: 'Test',
				name: '데이터 마이그레이션 검증',
				developmentStart: '',
				developmentEnd: '',
				description: `as-is 시스템과 to-be 시스템 간의 대규모 데이터 마이그레이션 과정에서, 이관 대상 데이터의 정확성을 검증하기 위한 로직 자동화<br />
                              샘플링이 아닌 전수 비교를 수행하기 위한 스크립트를 작성하여, 컬럼 단위의 상세 검증 및 통계 리포트를 통해 데이터의 완전성을 확보`,
			},
			develop3: {
				type: 'Feature',
				name: 'Front-end 신규 개발 (레거시 시스템 청산)',
				developmentStart: '',
				developmentEnd: '',
				description: `수수료 계산, 확인, 사전업무 등 사용자 업무 흐름을 고려한 페이지를 새롭게 설계 및 개발<br />
                              사용자 행위 기반 로직이 많아 동적 렌더링 처리와 상태 관리에 대한 세밀한 고민을 바탕으로 화면 구현`,
			},
		},
	},
	naedam: {
		name: '내담씨앤씨',
		projectName: '사내 홈페이지 신규개발',
		durationStart: '2022-12',
		durationEnd: '2023-03',
		skillKeywords: 'Java,Spring Boot,Javascript,Jquery,MariaDB,Servlet,Cafe24',
		description: `단기간 내 사내에서 실사용이 가능하고 회사를 소개하는 웹사이트 완성<br />
                      관리자가 직접 콘텐츠를 변경할 수 있는 Admin 연동 기능 구현`,
		development: {
			develop1: {
				type: 'Feature',
				name: '사내 홈페이지 설계',
				developmentStart: '',
				developmentEnd: '',
				description: `전체 기획 및 사이트맵 설계 주도<br />
                              최신 IT 기업 홈페이지 트렌드를 참고해 전체 구조 기획<br />
                              부서별 소개자료 수집 및 콘텐츠 반영<br />
                              사내 관리자 시스템 도입을 통해 홈페이지 콘텐츠를 동적으로 제어할 수 있는 구조 구현`,
			},
			develop2: {
				type: 'Feature',
				name: '사내 홈페이지 Back-end 및 Front-end 개발',
				developmentStart: '',
				developmentEnd: '',
				description: `관리자 페이지에서 이미지·텍스트 등을 쉽게 수정할 수 있도록 구성<br />
                              쿠키 기반 다국어 전환(국/영문) 기능 구현<br />
                              반응형 UI + 스크롤 인터랙션 설계로 최신 트렌드 반영 및 최신 스크롤링 기반 레이아웃과 시각적 인터랙션 도입`,
			},
		},
	},
	misumiMaintenance: {
		name: '한국미스미',
		projectName: '프론트엔드 유지보수/운영',
		durationStart: '2023-04',
		durationEnd: '2024-04',
		skillKeywords:
			'Php,Rxjs,Twig,Javascript,Jquery,Ubuntu Linux,Docker,Apache,Nodejs,Xampp,Bitbucket,Jenkins',
		description: `신규 API의 설계, 적용 및 프론트엔드 개발<br />
                      UI/UX 개선 및 사용자 편의성 강화<br />
                      GA4(Google Analytics 4) 연동 및 데이터 분석 구현<br />
                      Admin 기능 개선: 답변 여부 관리 및 회수 기능 구현<br />
                      CAD 다운로드 대기 기능 설계 및 구현<br />
                      상품 추천 기능 개발 및 프론트엔드 인터페이스 구현`,
		development: {
			develop1: {
				type: 'Feature',
				name: 'GA4 도입 및 전환 이벤트 트래킹 구축',
				developmentStart: '2023-04',
				developmentEnd: '2023-07',
				description: `기존 Universal Analytics(UA) 종료에 대응하여 Google Analytics 4 전면 도입<br />
                              모든 페이지의 PV(Page View) 및 주요 사용자 행동 이벤트(장바구니 추가, 주문, 상품 스펙 확인, 검색 등) 트래킹 구축`,
			},
			develop2: {
				type: 'Feature',
				name: '배송 정책 개편에 따른 API 및 화면 개발',
				developmentStart: '2023-08',
				developmentEnd: '2023-09',
				description: `일본 본사 API 변경에 따라 특별 배송 항목을 추가하는 프로젝트에 참여<br />
                              새로운 과금 항목 및 배송료 로직에 대응하여 API 설계 및 화면 단 변경 수행`,
			},
			develop3: {
				type: 'Style',
				name: 'UI/UX 개선 작업',
				developmentStart: '2023-09',
				developmentEnd: '2023-11',
				description: `UI/UX 개선 작업을 통한 콘텐츠 시선 흐름 및 마우스 동선 최적화 - UX 개선 및 이탈률 감소에 기여<br />
                              사용자 권한에 따른 메인페이지 및 공통 헤더 UI 분기 처리로 개인화된 UX 제공<br />
                              불필요한 반복 동작 제거 및 마이크로 인터랙션 도입을 통한 사용자 이탈률 감소에 기여`,
			},
			develop4: {
				type: 'Fix',
				name: 'Admin 기능 개선 (답변 회수 처리 기능)',
				developmentStart: '2023-12',
				developmentEnd: '2023-12',
				description: `관리자 페이지에서 사용자가 등록한 문의에 대해 답변 후 회수가 필요한 경우, 상태에 따른 처리 로직을 추가<br />
                              프론트엔드에서 조건에 따라 버튼 UI 변경 및 API 연동 구현`,
			},
			develop5: {
				type: 'Feature',
				name: 'Groobee 솔루션 기반 추천 상품 기능 개발',
				developmentStart: '2024-01',
				developmentEnd: '2024-03',
				description: `Groobee 솔루션을 활용하여 상품 조회수 및 구매 수 기반 데이터 수집 및 전송<br />
                              사용자의 최근 본 상품을 기준으로 추천 상품을 노출하는 기능을 Groobee API를 기반으로 개발`,
			},
		},
	},
	misumiRenewal: {
		name: '한국미스미',
		projectName: '한국미스미 이커머스 플랫폼 마이그레이션 (React/Next.js)',
		durationStart: '2024-05',
		durationEnd: '2025-03',
		skillKeywords:
			'React,TypeScript,Next.js,Redux,Nodejs,Sass,Vercel,Webpack,SWC,Babel,DataDog,GitHub Actions,Circleci',
		description: `PC 및 모바일 프론트엔드 리뉴얼 개발<br />
                      공통 Header 개발: 로고, 문구, 견적/주문, 장바구니, 문의, 로그인/로그아웃 등 구현<br />
                      카테고리 페이지 및 서브·말단 카테고리 UI 설계 및 개발<br />
                      검색 기능 개발: 검색창, 주문, 장바구니, 배너, 상품 정보 미게재 주문 지원<br />
                      공통 플로팅 바 구현: 상품 추천, CAD, 비교하기, 견적/주문 등 기능 개발<br />
                      공통 유저 기능 개발: 권한 관리, 가격 확인, 장바구니, 마이부품표, 회원 정보 및 배송 정보 관리<br />
                      메인 페이지 설계 및 개발<br />
                      브랜드 페이지 UI 개발<br />
                      상품 비교 기능 및 비교 페이지 구현<br />
                      AA 및 GA 연동 및 데이터 분석 기능 개발`,
		development: {
			develop1: {
				type: 'Feature',
				name: '이커머스 플랫폼 마이그레이션',
				developmentStart: '2024-05',
				developmentEnd: '2024-12',
				description: `RxJS, Twig 기반 10년 된 레거시 플랫폼을 React + Next.js 기반으로 전면 리뉴얼<br />
                              렌더링 최적화, Intersection Observer, Lazy Load + CDN(S+CloudFront) 도입을 통한 레거시 시스템 대비 렌더링 속도 60% 향상 및 사용자 이탈률 15% 감소<br />
                              CSR/SSR 분기 처리 및 Next 미들웨어로 크롤링 대응 -> SEO 이슈 해결<br />
                              멀티 디바이스 구조 설계 (_app.pc.tsx / _app.mobile.tsx 분리) -> 기기별 최적화 및 유지보수 효율 증대<br />
                              상품 비교 기능 및 비교 페이지 신규 도입 개발 -> 비교 상품에 관한 상세 페이지 유입률 및 구매 전환율 상승<br />
                              공통 UI 컴포넌트(Button, Checkbox, Modal 등) 개발 -> UI 일관성과 유지보수성 향상<br />
                              헤더, 메인페이지, 장바구니, My부품 추가 등 주요 기능 개발`,
			},
			develop2: {
				type: 'Test',
				name: '기능 테스트 및 오픈 대응',
				developmentStart: '2024-12',
				developmentEnd: '2025-01',
				description: `QA팀과 협업하여 크로스 브라우징 및 모바일 대응 테스트 수행<br />
                              최종 오픈 일정에 맞춰 사용자 피드백 기반 수정 및 기능 안정화 진행`,
			},
			develop3: {
				type: 'Stabilize',
				name: '안정화 및 운영',
				developmentStart: '2025-01',
				developmentEnd: '2025-03',
				description: `서비스 오픈 이후 주요 기능에 대한 모니터링 및 오류 수정 진행<br />
                              사용자 행동 데이터 기반으로 UI/UX 개선 및 성능 최적화 수행<br />
                              운영 이슈 대응 및 관리 기능 개선을 통해 서비스 안정성 강화`,
			},
		},
	},
} as const;
