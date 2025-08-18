import { useEffect, useState, useRef } from 'react';
import styles from './ScrollProgressBar.module.scss';

export default function ScrollProgressBar() {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const progressBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animationFrameId: number;

		const updateScrollProgress = () => {
			const scrollTop = window.scrollY;
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollTop / scrollHeight;

			setScrollPercentage(progress);
			animationFrameId = requestAnimationFrame(updateScrollProgress);
		};

		const onScroll = () => {
			if (!animationFrameId) {
				animationFrameId = requestAnimationFrame(updateScrollProgress);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!progressBarRef.current) {
			return;
		}

		const { left, width } = progressBarRef.current.getBoundingClientRect();
		const clickX = e.clientX - left;
		const scrollHeight =
			document.documentElement.scrollHeight - window.innerHeight;

		const targetScroll = (clickX / width) * scrollHeight;
		window.scrollTo({ top: targetScroll, behavior: 'smooth' });
	};

	return (
		<div
			className={styles.container}
			ref={progressBarRef}
			onClick={handleProgressBarClick}
		>
			<div
				className={styles.scrollProgressBar}
				style={{
					transform: `scaleX(${scrollPercentage})`,
					transformOrigin: 'left',
				}}
			/>
		</div>
	);
}

ScrollProgressBar.displayName = 'ScrollProgressBar';
