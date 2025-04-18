import { d as apiClient } from "./offers.js";
async function getExplore() {
  try {
    const resp = await apiClient.get(
      `/explore`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
export {
  getExplore as g
};
