import { ActiveLink } from '../ActiveLink';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerBG}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
};
