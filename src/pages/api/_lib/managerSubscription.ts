import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

export const saveSubscription = async (
  subscriptionID: string,
  customerID: string,
) => {
  // Fetching user data in FaunaDB through ID
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerID)),
    ),
  );
  const subscription = await stripe.subscriptions.retrieve(subscriptionID);
  // Save subscription data in FaunaDB
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  await fauna.query(
    q.Create(q.Collection('subscriptions'), {
      data: subscriptionData,
    }),
  );
};
