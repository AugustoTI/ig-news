import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/react';

export const SingInButton = () => {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.singInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" />
      {session.user?.name}
      <FiX color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.singInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  );
};
