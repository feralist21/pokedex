export default class httpClinet {
	async get(pathToFetch) {
		try {
			const response = await fetch(pathToFetch);
			if (!response.ok) {
				throw new Error(`Failed to fetch: ${pathToFetch}`);
			}
			const data = await response.json();
			return data;
		} catch (error) {
            console.error(error);
        }
	}
}
