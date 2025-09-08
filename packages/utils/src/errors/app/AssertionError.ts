import { ApplicationError } from "../ApplicationError";

/**
 * Assertion Error
 */
export class AssertionError extends ApplicationError {
	/** assertion type */
	type: string;

	/** assertion message */
	messages: string[];

	/**
	 * @param type assertion type
	 * @param message this variable needs to be not empty
	 */
	constructor(type: string, message: string | string[]) {
		const messages = Array.isArray(message) ? message : [message];
		super(`[${type}] ${messages[0] ?? 'Assertion Error'}`);
		this.name = `AssertionError`;
		this.type = type;
		this.messages = messages;
	}
}
