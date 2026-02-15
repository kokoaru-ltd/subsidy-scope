export async function retryWithBackoff<T>(
	fn: () => Promise<T>,
	maxRetries = 3,
	baseDelay = 1000,
): Promise<T> {
	for (let attempt = 0; attempt <= maxRetries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			if (attempt === maxRetries) throw error;
			const delay = baseDelay * 2 ** attempt + Math.random() * 500;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	}
	throw new Error("Unreachable");
}
