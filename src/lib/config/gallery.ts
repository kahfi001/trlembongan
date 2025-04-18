import apiClient from "./axios";

export async function getGallery() {
	try {
		const resp = await apiClient.get(
			`/gallery`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}