'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownPreview from './MarkdownPreview';
import { useWrite } from './Write.hook';
import styles from './Write.module.scss';
import Input from '@/components/common/Input';

export default function WritePage() {
	const { t } = useTranslation();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const {
		post,
		setPost,
		handleInputChange,
		handleUpload,
		handleDownload,
		handleDragOver,
	} = useWrite();

	return (
		<div className={styles.editorContainer}>
			<div className={styles.writeInfoWrap}>
				<div className={styles.inputBox}>
					{(
						[
							'title',
							'description',
							'thumbnailImage',
							'mainTag',
							'tags',
						] as const
					).map(field => (
						<Input
							key={field}
							title={field}
							placeholder={t('component.pages.write.inputPlaceHolder', {
								field,
							})}
							type="text"
							name={field}
							isRequired
							value={post[field] as string}
							onChange={handleInputChange}
						/>
					))}
					<textarea
						ref={textAreaRef}
						value={post.content}
						onChange={e =>
							setPost(prev => ({ ...prev, content: e.target.value }))
						}
						onDragOver={e => {
							e.preventDefault();
						}}
						onDrop={e => handleDragOver(e, textAreaRef)}
						placeholder={t('component.pages.write.mdPlaceholder')}
						className={styles.textarea}
					/>
				</div>
				<MarkdownPreview content={post.content} />
			</div>
			<div className={styles.buttonWrap}>
				<button onClick={handleDownload} className={styles.downloadButton}>
					{t('component.pages.write.mdDownload')}
				</button>
				<button onClick={handleUpload} className={styles.downloadButton}>
					{t('component.pages.write.mdUpload')}
				</button>
			</div>
		</div>
	);
}
WritePage.displayName = 'WritePage';
