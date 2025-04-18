import apiClient from "./axios";

export async function getOffers() {
	try {
		const resp = await apiClient.get(
			`/offers`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getOffersDetail(slug?: string) {
	try {
		const resp = await apiClient.get(
			`/offers/${slug}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
