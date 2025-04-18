// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/info';
import { getAccommodation, getAccommodationDetail } from '$lib/config/accommodation';
import { getOffers } from '$lib/config/offers';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
    try {
        const [info,accommodation,accommodationDetail,offers] = await Promise.all([
            getInformation(),
            getAccommodation(),
            getAccommodationDetail(params.slug),
            getOffers()
        ]);

        return {
            info,
            accommodation,
            accommodationDetail,
            offers
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};

