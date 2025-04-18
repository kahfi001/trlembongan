import { c as apiClient } from './offers-CbI0Iqj7.js';

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

export { getSeo as g };
//# sourceMappingURL=seo-C0aigka1.js.map
