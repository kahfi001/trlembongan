import apiClient from "./axios";

export async function getPagehome() {
	try {
		const resp = await apiClient.get(
			`/pagehome`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}