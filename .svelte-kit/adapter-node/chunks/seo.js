import { d as apiClient } from "./offers.js";
async function getSeo() {
  try {
    const resp = await apiClient.get(
      `/seo`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
export {
  getSeo as g
};
