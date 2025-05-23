import { c as apiClient } from './offers-CbI0Iqj7.js';

async function getDining() {
  try {
    const resp = await apiClient.get(
      `/dining`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getDiningDetail(slug) {
  try {
    const resp = await apiClient.get(
      `/dining/${slug}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}

export { getDiningDetail as a, getDining as g };
//# sourceMappingURL=dining-CKKpOrfh.js.map
