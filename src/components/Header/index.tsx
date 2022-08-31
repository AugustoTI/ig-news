import Link from 'next/link';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerBG}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/" className={styles.active}>
            Home
          </Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
};
