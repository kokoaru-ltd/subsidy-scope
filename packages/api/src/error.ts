export class ApiError extends Error {
	constructor(
		public statusCode: number,
		message: string,
	) {
		super(message);
		this.name = "ApiError";
	}

	static badRequest(message: string) {
		return new ApiError(400, message);
	}
	static unauthorized(message: string) {
		return new ApiError(401, message);
	}
	static forbidden(message: string) {
		return new ApiError(403, message);
	}
	static notFound(message: string) {
		return new ApiError(404, message);
	}
	static tooManyRequests(message: string) {
		return new ApiError(429, message);
	}
	static internal(message: string) {
		return new ApiError(500, message);
	}
}

export function handleApiError(error: unknown): Response {
	if (error instanceof ApiError) {
		return Response.json({ error: error.message }, { status: error.statusCode });
	}
	console.error("Unhandled API error:", error);
	return Response.json({ error: "Internal Server Error" }, { status: 500 });
}
