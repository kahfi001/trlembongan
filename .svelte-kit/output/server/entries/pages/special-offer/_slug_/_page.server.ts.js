import { g as getInformation, b as getOffers, e as getOffersDetail, a as getAccommodation } from "../../../../chunks/offers.js";
const load = async ({ params }) => {
  try {
    const [info, offers, offersDetail, accommodation] = await Promise.all([
      getInformation(),
      getOffers(),
      getOffersDetail(params.slug),
      getAccommodation()
    ]);
    return {
      info,
      offers,
      offersDetail,
      accommodation
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
