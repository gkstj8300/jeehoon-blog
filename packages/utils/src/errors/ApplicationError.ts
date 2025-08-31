export class ApplicationError extends Error {
	/**
	 * @param {string} message
	 */
	constructor(message: string) {
		super(message);
		this.name = 'ApplicationError';
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
