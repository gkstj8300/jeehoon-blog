import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

export type Props = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'maxLength'
> & {
	type?: 'text' | 'email';
	title: string;
	placeholder: string;
	isRequired?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
	(
		{
			type = 'text',
			title,
			placeholder,
			isRequired = false,
			disabled = false,
			...restProps
		},
		ref
	) => {
		return (
			<div className={styles.textInputContainer}>
				<div className={styles.inputWrap}>
					<div className={styles.inputLabel}>
						<div className={styles.inner}>
							<div className={styles.inputBox}>
								<span>
									{isRequired && <strong className={styles.requiredValue}>*</strong>}
									{title}
								</span>
								<input
                                    className={styles.input}
									type={type}
									disabled={disabled}
									ref={ref}
									placeholder={placeholder}
									{...restProps}
								/>
							</div>
							<button className={styles.delateButton} />
						</div>
					</div>
				</div>
			</div>
		);
	}
);
TextInput.displayName = 'TextInput';
