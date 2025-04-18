import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getOffers} from '$lib/config/offers';
import { getAccommodation } from '$lib/config/accommodation';
import { getDining,getDiningDetail } from '$lib/config/dining';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const [info,offers,diningDetail,accommodation,dining] = await Promise.all([
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
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

