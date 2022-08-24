import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceID: string;
}

export const SubscribeButton = ({ priceID }: SubscribeButtonProps) => {
  const { data: session } = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
      return;
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
