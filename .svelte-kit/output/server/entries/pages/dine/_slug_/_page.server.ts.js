import { g as getInformation, b as getOffers, a as getAccommodation } from "../../../../chunks/offers.js";
import { a as getDiningDetail, g as getDining } from "../../../../chunks/dining.js";
const load = async ({ params }) => {
  try {
    const [info, offers, diningDetail, accommodation, dining] = await Promise.all([
      getInformation(),
      getOffers(),
      getDiningDetail(params.slug),
      getAccommodation(),
      getDining()
    ]);
    return {
      info,
      offers,
      diningDetail,
      accommodation,
      dining
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
