import { g as getInformation, a as getAccommodation, c as getAccommodationDetail, b as getOffers } from "../../../../chunks/offers.js";
const load = async ({ params }) => {
  try {
    const [info, accommodation, accommodationDetail, offers] = await Promise.all([
      getInformation(),
      getAccommodation(),
      getAccommodationDetail(params.slug),
      getOffers()
    ]);
    return {
      info,
      accommodation,
      accommodationDetail,
      offers
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
