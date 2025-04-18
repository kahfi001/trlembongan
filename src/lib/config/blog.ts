import apiClient from "./axios";

export async function getBlog() {
	try {
		const resp = await apiClient.get(
			`/blog`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getBlogDetail(slug?: string) {
	try {
		const resp = await apiClient.get(
			`/blog/${slug}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
