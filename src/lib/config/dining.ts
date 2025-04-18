import apiClient from "./axios";

export async function getDining() {
	try {
		const resp = await apiClient.get(
			`/dining`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getDiningDetail(slug?: string) {
	try {
		const resp = await apiClient.get(
			`/dining/${slug}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
