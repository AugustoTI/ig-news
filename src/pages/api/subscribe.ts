import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { stripe } from '../../services/stripe';

export const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session?.user?.email as string,
    });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{ price: 'price_1LYziILbCx64RY2PmwdaycFZ', quantity: 1 }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRAPI_SUCESS_URL as string,
      cancel_url: process.env.STRAPI_CANCEL_URL as string,
      customer: stripeCustomer.id,
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
};
