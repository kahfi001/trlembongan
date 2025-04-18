import { g as getInformation, a as getAccommodation, b as getOffers } from "../../../chunks/offers.js";
import { g as getBlog } from "../../../chunks/blog.js";
import { g as getSeo } from "../../../chunks/seo.js";
const load = async () => {
  try {
    const [info, blog, accommodation, offers, seo] = await Promise.all([
      getInformation(),
      getBlog(),
      getAccommodation(),
      getOffers(),
      getSeo()
    ]);
    return {
      maxage: 3600,
      info,
      blog,
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
