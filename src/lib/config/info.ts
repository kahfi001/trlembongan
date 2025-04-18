import apiClient from "./axios";

export async function getInformation() {
	try {
		const resp = await apiClient.get(
			`/info`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}