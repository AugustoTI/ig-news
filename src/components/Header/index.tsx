import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerBG}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
};
