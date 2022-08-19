import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export const SingInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#04D361" />
      Sing in with GitHub
      <FiX color="#737380" />
    </button>
  ) : (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  );
};
