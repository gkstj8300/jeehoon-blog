import styles from './Introduce.module.scss';

export default function Introduce() {
	return (
		<section>
			<div className={styles.container}>
				<h3 className={styles.title}>
					Introduce
				</h3>
				<div className={styles.introduce}>
					<p>
						백엔드와 프론트엔드 개발, 코어 개발, 신규/리뉴얼 개발, 유지보수 및 운영 경험을 가진 프론트엔드 개발자입니다.<br/> React, Next.js, TypeScript, Redux 등을 활용한 개발과 운영 경험을 보유하고 있으며 항상 사용자의 입장에서 고민하며 최적의 서비스를 제공하기 위해 노력하고 있습니다.<br/><br/>
						다양한 경험들과 환경으로 기여할 수 있도록 노력하고 있습니다. 이를 통한 다양한 경험을 쌓기 위해 각종 프로젝트에 투입할 수 있도록 매일 학습중이며 개발, 유지보수/운영 을 통해 경험치를 쌓고 있습니다. 개발 블로그를 통해 부족한 부분을 기록할 수 있도록 노력중이며 프론트엔드 개발의 정점에 다다르겠다는 목표로 꾸준히 나아가고 있습니다.<br /><br />
						개발이란 코딩을 잘하는 것이 중요하다고 생각할 수 있지만 커뮤니케이션이 가장 중요하다고 생각하고 있습니다.
						비즈니스와 사용자와의 적극적인 커뮤니케이션과 책임감을 바탕으로 보다 더 좋은 프론트엔드 개발자로서 성장하기 위해 학습하고 경험하고 노력하고 있습니다.
					</p>
				</div>
			</div>

			<div className={styles.footer}>
				<small className={styles.lastUpdate}>
					Latest Updated
				</small>
				<span className={styles.updateDate}>
					2025.09.09
				</span>
			</div>
		</section>
	);
}
