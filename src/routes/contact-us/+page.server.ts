import type { PageServerLoad } from './$types';
import axios from 'axios';
import { getInformation } from '$lib/config/info';
import { getOffers } from '$lib/config/offers';
import { getAccommodation } from '$lib/config/accommodation';
import { getSeo } from '$lib/config/seo';



export const load: PageServerLoad = async () => {
    try {
        const [info,offers,accommodation,seo] = await Promise.all([
            getInformation(),
            getOffers(),
            getAccommodation(),
            getSeo()
        ]);

        return {
            maxage: 3600,
            info,
            offers,
            accommodation,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
