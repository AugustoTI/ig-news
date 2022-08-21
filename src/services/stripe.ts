import { Stripe } from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(process.env.STRAPI_API_KEY as string, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'ignews',
    version,
  },
});
