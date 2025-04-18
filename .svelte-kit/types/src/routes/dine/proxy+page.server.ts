// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getAccommodation } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';
import { getDining } from '$lib/config/dining';
import { getSeo } from '$lib/config/seo';

export const load = async () => {
    try {
        const [info,accommodation,offers,dining,seo] = await Promise.all([
            getInformation(),
            getAccommodation(),
            getOffers(),
            getDining(),
            getSeo()
        ]);

        return {
            info,
            accommodation,
            offers,
            dining,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

;null as any as PageServerLoad;