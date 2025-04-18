import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getOffers, getOffersDetail } from '$lib/config/offers';
import { getAccommodation } from '$lib/config/accommodation';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const [info,offers,offersDetail,accommodation] = await Promise.all([
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
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

