import { g as getInformation, a as getAccommodation, b as getOffers } from "../../../chunks/offers.js";
import { g as getDining } from "../../../chunks/dining.js";
import { g as getSeo } from "../../../chunks/seo.js";
const load = async () => {
  try {
    const [info, accommodation, offers, dining, seo] = await Promise.all([
      getInformation(),
      getAccommodation(),
      getOffers(),
      getDining(),
      getSeo()
    ]);
    return {
      info,
      accommodation,
      offers,
      dining,
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
