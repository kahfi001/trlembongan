import type { PageServerLoad } from './$types';
import axios from 'axios';
import { getInformation } from '$lib/config/info';
import { getExplore } from '$lib/config/explore';
import { getOffers } from '$lib/config/offers';
import { getAccommodation } from '$lib/config/accommodation';
import { getSeo } from '$lib/config/seo';



export const load: PageServerLoad = async () => {
    try {
        const [info,explore,offers,accommodation,seo] = await Promise.all([
            getInformation(),
            getExplore(),
            getOffers(),
            getAccommodation(),
            getSeo()
        ]);

        return {
            maxage: 3600,
            info,
            explore,
            offers,
            accommodation,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
