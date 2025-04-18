import { d as apiClient, g as getInformation, a as getAccommodation, b as getOffers } from "../../chunks/offers.js";
import { g as getExplore } from "../../chunks/explore.js";
import { g as getSeo } from "../../chunks/seo.js";
async function getPopup() {
  try {
    const resp = await apiClient.get(
      `/popup`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getPagehome() {
  try {
    const resp = await apiClient.get(
      `/pagehome`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
const load = async () => {
  try {
    const [info, accommodation, offers, popup, explore, seo, pagehome] = await Promise.all([
      getInformation(),
      getAccommodation(),
      getOffers(),
      getPopup(),
      getExplore(),
      getSeo(),
      getPagehome()
    ]);
    return {
      info,
      accommodation,
      offers,
      popup,
      explore,
      seo,
      pagehome
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
