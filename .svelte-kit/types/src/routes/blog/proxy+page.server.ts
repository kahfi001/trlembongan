// @ts-nocheck
import type { PageServerLoad } from './$types';
import axios from 'axios';
import { getInformation } from '$lib/config/info';
import { getBlog } from '$lib/config/blog';
import { getAccommodation } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';
import { getSeo } from '$lib/config/seo';



export const load = async () => {
    try {
        const [info,blog,accommodation,offers,seo] = await Promise.all([
            getInformation(),
            getBlog(),
            getAccommodation(),
            getOffers(),
            getSeo()
        ]);

        return {
            maxage: 3600,
            info,
            blog,
            accommodation,
            offers,
            seo
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
;null as any as PageServerLoad;