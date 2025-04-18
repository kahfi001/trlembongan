import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getAccommodation, getAccommodationDetail } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';
import { getPopup } from '$lib/config/popup';
import { getExplore } from '$lib/config/explore';
import { getSeo } from '$lib/config/seo';
import { getPagehome } from '$lib/config/pagehome';

export const load: PageServerLoad = async () => {
    try {
        const [info,accommodation,offers,popup,explore,seo,pagehome] = await Promise.all([
            getInformation(),
            getAccommodation(),
            getOffers(),
            getPopup(),
            getExplore(),
            getSeo(),
            getPagehome()
        ]);

        return {
            info,
            accommodation,
            offers,
            popup,
            explore,
            seo,
            pagehome
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

