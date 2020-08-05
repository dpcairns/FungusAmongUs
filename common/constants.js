import mushData from '../data/mushData.js';

// nice use of constants for your magic strings!
export const USER = 'USER';

export const BASKET = 'BASKET';

// This is a good solution, but I want to point out some alternatives. Seems like you could just store the indicies of these arrays here, or maybe add a "regions" array to all mushrooms with a list of the regions they belong to.

// also, these regionMush variables probably belong in a different file, since they are not exactly 'constants' like the two strings above

export const coastMush = [mushData[0], mushData[1], mushData[2], mushData[3], mushData[4], mushData[6], mushData[9], mushData[11], mushData[12], mushData[15], mushData[16], mushData[18], mushData[19]];

export const swMush = [mushData[0], mushData[1], mushData[5], mushData[7], mushData[10], mushData[11], mushData[12], mushData[14], mushData[15], mushData[16], mushData[17], mushData[19]];

export const nwMush = [mushData[0], mushData[1], mushData[2], mushData[3], mushData[4], mushData[5], mushData[6], mushData[7], mushData[8], mushData[9], mushData[10], mushData[11], mushData[12], mushData[15], mushData[16], mushData[17], mushData[18], mushData[19]];

export const centralMush = [mushData[1], mushData[2], mushData[3], mushData[4], mushData[5], mushData[7], mushData[8], mushData[10], mushData[11], mushData[12], mushData[13], mushData[16], mushData[17], mushData[18], mushData[19]];

export const eastMush = [mushData[8], mushData[11], mushData[13], mushData[16], mushData[19]];