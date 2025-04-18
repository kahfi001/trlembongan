import { g as getInformation, b as getOffers, a as getAccommodation } from "../../../../chunks/offers.js";
import { a as getBlogDetail, g as getBlog } from "../../../../chunks/blog.js";
const load = async ({ params }) => {
  try {
    const [info, offers, blogDetail, accommodation, blog] = await Promise.all([
      getInformation(),
      getOffers(),
      getBlogDetail(params.slug),
      getAccommodation(),
      getBlog()
    ]);
    return {
      info,
      offers,
      blogDetail,
      accommodation,
      blog
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};
export {
  load
};
