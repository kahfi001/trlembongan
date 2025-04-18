import apiClient from "./axios";

export async function getAccommodation() {
	try {
		const resp = await apiClient.get(
			`/accommodation`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getAccommodationDetail(slug?: string) {
	try {
		const resp = await apiClient.get(
			`/accommodation/${slug}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
