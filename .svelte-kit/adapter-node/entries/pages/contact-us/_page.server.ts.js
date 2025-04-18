import { g as getInformation, b as getOffers, a as getAccommodation } from "../../../chunks/offers.js";
import { g as getSeo } from "../../../chunks/seo.js";
const load = async () => {
  try {
    const [info, offers, accommodation, seo] = await Promise.all([
      getInformation(),
      getOffers(),
      getAccommodation(),
      getSeo()
    ]);
    return {
      maxage: 3600,
      info,
      offers,
      accommodation,
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
