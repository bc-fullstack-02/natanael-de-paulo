class BadRequestException {
	public readonly message: string;
	public readonly status: number;

	constructor (message: string, status = 400) {
		this.message = message;
		this.status = status;
	}
}

export { BadRequestException };