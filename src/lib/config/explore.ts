import apiClient from "./axios";

export async function getExplore() {
	try {
		const resp = await apiClient.get(
			`/explore`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}