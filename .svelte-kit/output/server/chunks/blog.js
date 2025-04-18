import { d as apiClient } from "./offers.js";
async function getBlog() {
  try {
    const resp = await apiClient.get(
      `/blog`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getBlogDetail(slug) {
  try {
    const resp = await apiClient.get(
      `/blog/${slug}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
export {
  getBlogDetail as a,
  getBlog as g
};
