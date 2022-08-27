import { loadStripe } from '@stripe/stripe-js';

export const getStripeJS = async () => {
  const stripeJS = await loadStripe(
    process.env.NEXT_PUBLIC_STRAPI_PUBLIC_KEY as string,
  );

  return stripeJS;
};
