import { d as apiClient, g as getInformation, a as getAccommodation, b as getOffers } from "../../../chunks/offers.js";
import { g as getSeo } from "../../../chunks/seo.js";
async function getGallery() {
  try {
    const resp = await apiClient.get(
      `/gallery`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
const load = async () => {
  try {
    const [info, gallery, accommodation, offers, seo] = await Promise.all([
      getInformation(),
      getGallery(),
      getAccommodation(),
      getOffers(),
      getSeo()
    ]);
    return {
      maxage: 3600,
      info,
      gallery,
      accommodation,
      offers,
      seo
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
