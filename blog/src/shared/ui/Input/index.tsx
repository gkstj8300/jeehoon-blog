import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import styles from './Input.module.scss';

type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'maxLength'
> & {
	type?: 'text' | 'email';
	title: string;
	placeholder: string;
	isRequired?: boolean;
};

function Input(
	{
		type = 'text',
		title,
		placeholder,
		isRequired = false,
		disabled = false,
		...restProps
	}: InputProps,
	ref: Ref<HTMLInputElement>
) {
	return (
		<div className={styles.textInputContainer}>
			<div className={styles.inputWrap}>
				<div className={styles.inputLabel}>
					<div className={styles.inner}>
						<div className={styles.inputBox}>
							<span>
								{isRequired && (
									<strong className={styles.requiredValue}>*</strong>
								)}
								{title}
							</span>
							<input
								name="textInput"
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

export default forwardRef(Input);
