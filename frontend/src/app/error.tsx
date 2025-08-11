'use client';

import React from 'react';

export default function RootError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<html lang="ko">
			<body>
				<div style={{ padding: 24 }}>
					<h1>문제가 발생했습니다.</h1>
					<p>{error?.message}</p>
					<button onClick={() => reset()}>다시 시도</button>
				</div>
			</body>
		</html>
	);
}
