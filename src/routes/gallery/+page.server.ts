import type { PageServerLoad } from './$types';
import axios from 'axios';
import { getInformation } from '$lib/config/info';
import { getGallery } from '$lib/config/gallery';
import { getAccommodation } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';
import { getSeo } from '$lib/config/seo';



export const load: PageServerLoad = async () => {
    try {
        const [info,gallery,accommodation,offers,seo] = await Promise.all([
            getInformation(),
            getGallery(),
            getAccommodation(),
            getOffers(),
            getSeo()
        ]);

        return {
            maxage: 3600,
            info,
            gallery,
            accommodation,
            offers,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
