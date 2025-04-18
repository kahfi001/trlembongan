import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getAccommodation } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';
import { getSeo } from '$lib/config/seo';



export const load: PageServerLoad = async () => {
    try {
        const [info,accommodation,offers,seo] = await Promise.all([
            getInformation(),
            getAccommodation(),
            getOffers(),
            getSeo()
        ]);

        return {
            info,
            accommodation,
            offers,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

