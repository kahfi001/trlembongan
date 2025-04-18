import apiClient from "./axios";

export async function getSeo() {
	try {
		const resp = await apiClient.get(
			`/seo`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}