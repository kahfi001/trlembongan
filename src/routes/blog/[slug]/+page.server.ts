import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getOffers} from '$lib/config/offers';
import { getAccommodation } from '$lib/config/accommodation';
import { getBlog, getBlogDetail } from '$lib/config/blog';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const [info,offers,blogDetail,accommodation,blog] = await Promise.all([
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
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

