import axios from 'axios';

const BASE_URL = "http://50.6.206.23/~trlembongan/cms/api/v1";
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "cache-control": "public, max-age=3600",
    "Access-Control-Allow-Origin": "*",
    "Accept-Encoding": "gzip, compress, br"
  }
});
async function getInformation() {
  try {
    const resp = await apiClient.get(
      `/info`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getAccommodation() {
  try {
    const resp = await apiClient.get(
      `/accommodation`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getAccommodationDetail(slug) {
  try {
    const resp = await apiClient.get(
      `/accommodation/${slug}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getOffers() {
  try {
    const resp = await apiClient.get(
      `/offers`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getOffersDetail(slug) {
  try {
    const resp = await apiClient.get(
      `/offers/${slug}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}

export { getAccommodation as a, getOffers as b, apiClient as c, getAccommodationDetail as d, getOffersDetail as e, getInformation as g };
//# sourceMappingURL=offers-CbI0Iqj7.js.map
