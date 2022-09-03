import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../services/axios';
import { getStripeJS } from '../../services/stripe-browser';
import styles from './styles.module.scss';

export const SubscribeButton = () => {
  const { data: session } = useSession();
  const routes = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      routes.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
};
