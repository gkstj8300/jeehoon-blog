import { Translation } from '@/i18n/types';

export const project: Translation = {
    title: 'Project',
    hanwha: {
        name: '한화생명',
        projectName: '코어 시스템 구축 프로젝트',
        durationStart: '2022-06',
        durationEnd: '2022-12',
        skillKeywords: 'Java,Javascript,Servlet,Apache,Oracle,KendoUI,GitLab,JobPass,TeraStream,ETL',
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
                              시스템 간 데이터 전송을 위한 배치 인터페이스를 구현하였으며, 실제 운영 환경에서 데이터가 정확하게 전달되도록 다각도의 검증 로직을 설계 및 적용.`
            },
            develop2: {
                type: 'Test',
                name: '데이터 마이그레이션 검증',
                developmentStart: '',
                developmentEnd: '',
                description: `as-is 시스템과 to-be 시스템 간의 대규모 데이터 마이그레이션 과정에서, 이관 대상 데이터의 정확성을 검증하기 위한 로직 자동화<br />
                              샘플링이 아닌 전수 비교를 수행하기 위한 스크립트를 작성하여, 컬럼 단위의 상세 검증 및 통계 리포트를 통해 데이터의 완전성을 확보`
            },
            develop3: {
                type: 'Feature',
                name: 'Front-end 신규 개발 (레거시 시스템 청산)',
                developmentStart: '',
                developmentEnd: '',
                description: `수수료 계산, 확인, 사전업무 등 사용자 업무 흐름을 고려한 페이지를 새롭게 설계 및 개발<br />
                              사용자 행위 기반 로직이 많아 동적 렌더링 처리와 상태 관리에 대한 세밀한 고민을 바탕으로 화면 구현`
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
                description: `메인페이지 및 서브페이지 기획<br />
                              각 사업부 담당자에게 자료 요청 및 수집<br />
                              비동기 작업 처리를 위한 유틸리티 설계<br />
                              UI / UX 기반 설계`
            },
            develop2: {
                type: 'Feature',
                name: '사내 홈페이지 Back-end 및 Front-end 개발',
                developmentStart: '',
                developmentEnd: '',
                description: `시스템 구축 및 Admin 프로그램 연동 및 적용<br />
                              SEO 최적화 개발<br />
                              한글 / 영문 페이지 구축 (다국어 지원) 개발`
            },
        },
    },
    misumiMaintenance: {
        name: '한국미스미',
        projectName: '프론트엔드 유지보수/운영',
        durationStart: '2023-04',
        durationEnd: '2024-04',
        skillKeywords: 'Php,Rxjs,Twig,Javascript,Jquery,Ubuntu Linux,Docker,Apache,Nodejs,Xampp,Bitbucket,Jenkins',
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
                description: `기존 Google Analytics UA에서 GA4로 전환됨에 따라 전 페이지에 PV 이벤트 및 사용자 행위 기반의 주요 이벤트를 수동 처리로 구현<br />
                              장바구니, 주문 완료, 마이페이지 등 구매 전환 흐름과 관련된 상세 이벤트까지 측정되도록 작업`
            },
            develop2: {
                type: 'Feature',
                name: '배송 정책 개편에 따른 API 및 화면 개발',
                developmentStart: '2023-08',
                developmentEnd: '2023-09',
                description: `일본 본사 API 변경에 따라 특별 배송 항목을 추가하는 프로젝트에 참여<br />
                              새로운 과금 항목 및 배송료 로직에 대응하여 API 설계 및 화면 단 변경 수행`
            },
            develop3: {
                type: 'Style',
                name: 'UI/UX 개선 작업',
                developmentStart: '2023-09',
                developmentEnd: '2023-11',
                description: `반복적이고 불필요한 UI 동작을 개선하고 사용자 편의성을 높이기 위한 마이크로 인터랙션을 도입<br />
                              Header, Footer 등 공통 레이아웃 컴포넌트의 일관성과 재사용성 확보`
            },
            develop4: {
                type: 'Fix',
                name: 'Admin 기능 개선 (답변 회수 처리 기능)',
                developmentStart: '2023-12',
                developmentEnd: '2023-12',
                description: `관리자 페이지에서 사용자가 등록한 문의에 대해 답변 후 회수가 필요한 경우, 상태에 따른 처리 로직을 추가<br />
                              프론트엔드에서 조건에 따라 버튼 UI 변경 및 API 연동 구현`
            },
            develop5: {
                type: 'Feature',
                name: '그루비(Groobee) 기반 상품 추천 기능 개발',
                developmentStart: '2024-01',
                developmentEnd: '2024-03',
                description: `사용자의 최근 본 상품을 기준으로 추천 상품을 노출하는 기능을 Groobee API를 기반으로 개발<br />
                              검색창, 메인 페이지, 카테고리 페이지, 상세 페이지에 각각 다른 형태의 추천 로직 적용`
            },
        },
    },
    misumiRenewal: {
        name: '한국미스미',
        projectName: '리뉴얼 개발/유지보수/운영',
        durationStart: '2024-05',
        durationEnd: '2025-03',
        skillKeywords: 'React,TypeScript,Next.js,Redux,Nodejs,Sass,Vercel,Webpack,SWC,Babel,DataDog,GitHub Actions,Circleci',
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
                name: '리뉴얼 개발 (웹/모바일 공통 대응)',
                developmentStart: '2024-05',
                developmentEnd: '2024-12',
                description: `전체 구조 설계에 참여, Redux를 통한 상태 관리 및 API 연결 구조 정의<br />
                              공통 헤더, 플로팅바(추천/비교하기/주문 등) 등 핵심 레이아웃 요소를 개발<br />
                              카테고리 페이지, 상품 비교 기능, 유저 관련 기능(권한/장바구니/배송 등) 개발`
            },
            develop2: {
                type: 'Test',
                name: '기능 테스트 및 오픈 대응',
                developmentStart: '2024-12',
                developmentEnd: '2025-01',
                description: `QA팀과 협업하여 크로스 브라우징 및 모바일 대응 테스트 수행<br />
                              최종 오픈 일정에 맞춰 사용자 피드백 기반 수정 및 기능 안정화 진행`
            },
            develop3: {
                type: 'Stabilize',
                name: '안정화 및 운영',
                developmentStart: '2025-01',
                developmentEnd: '2025-03',
                description: `서비스 오픈 이후 주요 기능에 대한 모니터링 및 오류 수정 진행<br />
                              사용자 행동 데이터 기반으로 UI/UX 개선 및 성능 최적화 수행<br />
                              운영 이슈 대응 및 관리 기능 개선을 통해 서비스 안정성 강화`
            },
        },
    }
};
