import { c as apiClient } from './offers-CbI0Iqj7.js';

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

export { getExplore as g };
//# sourceMappingURL=explore-aUz5kJj9.js.map
