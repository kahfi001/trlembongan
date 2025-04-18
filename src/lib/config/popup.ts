import apiClient from "./axios";

export async function getPopup() {
	try {
		const resp = await apiClient.get(
			`/popup`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}