import { Stripe } from 'stripe';

export const stripe = new Stripe(process.env.STRAPI_API_KEY as string, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'ignews',
  },
});
