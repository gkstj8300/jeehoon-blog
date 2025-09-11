import styles from './Introduce.module.scss';

export default function Introduce() {
	return (
		<section>
			<div className={styles.container}>
				<h3 className={styles.title}>
					소개
				</h3>
				<div className={styles.introduce}>
					<p>
						안녕하세요,<br/>프론트엔드 개발자 박지훈 입니다.<br/><br/> 
						성능 최적화와 SEO 개선을 통해 실제 서비스의 렌더링 속도와 검색 엔진 점수를 향상시킨 경험이 있습니다.<br/> 
						Lazy Loading, CDN, WebP 포맷 도입, SSR 리다이렉션 등 다양한 기술적 접근을 주도하여 이미지 렌더링 병목 문제를 해결한 경험이 있습니다.<br/><br/>
						프론트엔드의 최신 트랜드 기술(Next.js, React, Typescript, Redux)을 사용하여 개발하고 있습니다.<br /><br />
						고민하는 습관을 가진 개발자로, 문제 해결 시 "왜 이렇게 동작하는가?"를 깊이 이해하려고 노력하고 있습니다.<br />
						사용자의 입장에서 고민하며 최적의 서비스를 제공하기 위해 책임감을 바탕으로 지속적으로 학습하고 있습니다.
					</p>
				</div>
			</div>

			<div className={styles.footer}>
				<small className={styles.lastUpdate}>
					마지막 업데이트
				</small>
				<span className={styles.updateDate}>
					2025.09.12
				</span>
			</div>
		</section>
	);
}
