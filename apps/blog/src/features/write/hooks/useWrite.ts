import { RefObject, useState } from 'react';
import { uploadToGitHub } from '@/shared/lib/apis/uploadToGitHub';
import { PostType } from '@/shared/types/slug';

export function useWrite() {
	const [post, setPost] = useState<PostType>({
		title: '',
		description: '',
		regDate: new Date().toISOString(),
		content: '',
		thumbnailImage: '',
		slug: '',
		mainTag: '',
		tags: [''],
	});

	// 입력값 변경 핸들러 (공통 적용)
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setPost(prev => ({
			...prev,
			[name]: name === 'tags' ? value.split(',') : value,
		}));
	};

	// 마크다운 업로드 핸들러
	const handleUpload = async () => {
		if (!post.title.trim() || !post.content.trim() || !post.mainTag.trim()) {
			alert('필수값을 입력하세요.');
			return;
		}

		try {
			await uploadToGitHub(post);
			alert('GitHub Api 업로드 완료');
		} catch (error) {
			/* eslint-disable no-console */
			console.error('Git Api 업로드 실패', error);
		}
	};

	// 마크다운 파일 다운로드 핸들러
	const handleDownload = () => {
		if (!post.title.trim() || !post.content.trim() || !post.mainTag.trim()) {
			alert('필수값을 입력하세요.');
			return;
		}

		const metadata = `---\ntitle: "${post.title}"\nregDate: "${post.regDate}"\ndescription: '${post.description}'\nthumbnailImage: '${post.thumbnailImage}'\nmainTag: '${post.mainTag}'\ntags: ${JSON.stringify(post.tags)}\n---\n`;
		const markdownWithMetadata = metadata + post.content;

		const blob = new Blob([markdownWithMetadata], { type: 'text/markdown' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${post.title || 'new-post'}.md`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const resizeImage = async (fileList: File[]) => {
		const resizePromise = fileList.map(file => {
			if (!file) {
				return null;
			}

			if (file.type === 'image/gif') {
				return Promise.resolve(file);
			}

			const reader = new FileReader();
			reader.readAsDataURL(file);

			return new Promise(resolve => {
				reader.onload = e => {
					const img = new Image();
					img.src = e.target?.result as string;

					img.onload = () => {
						const canvas = document.createElement('canvas');
						const ctx = canvas.getContext('2d');

						if (!ctx) {
							resolve(null);
							return;
						}

						// 리사이징 할 최대 너비 비율유지
						const MAX_WIDTH = 1024;
						const MAX_HEIGHT = 768;
						let width = img.width;
						let height = img.height;

						if (width > height) {
							if (width > MAX_WIDTH) {
								height *= MAX_WIDTH / width;
								width = MAX_WIDTH;
							}
						} else {
							if (height > MAX_HEIGHT) {
								width *= MAX_HEIGHT / height;
								height = MAX_HEIGHT;
							}
						}

						canvas.width = width;
						canvas.height = height;

						ctx.drawImage(img, 0, 0, width, height);

						canvas.toBlob(
							blob => {
								if (!blob) {
									resolve(null);
									return;
								}

								// jpeg 로 변환
								const resizedFile = new File([blob], file.name, {
									type: 'image/jpeg',
									lastModified: Date.now(),
								});

								resolve(resizedFile);
							},
							'image/jpeg',
							0.7
						);
					};
				};
			});
		});

		const results = await Promise.all(resizePromise);
		const resizedFiles = results.map(res => {
			if (res === null) {
				return null;
			}
			return res as File;
		});

		return resizedFiles;
	};

	const uploadImage = async (files: File[]) => {
		const resizedFiles = await resizeImage(files);

		const formData = new FormData();
		resizedFiles.forEach(file => {
			if (file) {
				formData.append('file', file);
			}
		});

		try {
			const res = await fetch('/api/uploadS3Image', {
				method: 'POST',
				body: formData,
			});

			const data = await res.json();
			return data.urls;
		} catch (e) {
			console.error(e);
			throw new Error('이미지 업로드에 실패했습니다.');
		}
	};

	const handleDragOver = async (
		e: React.DragEvent<HTMLTextAreaElement>,
		ref: RefObject<HTMLTextAreaElement>
	) => {
		e.preventDefault();

		// 이미지 파일 가져오기
		const files = e.dataTransfer.files;
		if (files.length === 0) {
			return;
		} else {
			const textarea = e.target as HTMLTextAreaElement;

			if (textarea && ref.current) {
				// 현재 커서 위치 가져오기
				const startPos = textarea.selectionStart;
				const endPos = textarea.selectionEnd; // 커서가 선택 영역을 드래그 하지 않았다면 startPost === endPos

				// 이전 값 저장
				const before = ref.current.value.slice(0, startPos);
				const after = ref.current.value.slice(endPos);

				// // fileList 형식으로 변환
				const fileList = Array.from(files);

				// 업로드 할 동안 보여줄 로딩 텍스트
				const loadingText = fileList.map(file => {
					return `![${file.name}](loading...)`;
				});
				const newText = `${before}${loadingText.join('\n')}${after}`;

				ref.current.value = newText;

				try {
					// 업로드 후 url 로 변경
					const data = await uploadImage(fileList);
					const uploadedText = data.map(
						(img: { name: string; url: string }) => {
							return `![${img.name}](${img.url})`;
						}
					);
					const finalText = `${before}${uploadedText.join('\n')}${after}`;
					ref.current.value = finalText;
				} catch (e) {
					console.error(e);
					ref.current.value = `${before}업로드에 실패하였습니다.${after}`;
				}
			}
		}
	};

	return {
		post,
		setPost,
		handleInputChange,
		handleUpload,
		handleDownload,
		handleDragOver,
	};
}
