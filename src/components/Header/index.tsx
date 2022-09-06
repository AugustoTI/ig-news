import { useState } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { ActiveLink } from '../ActiveLink';
import { MenuMobile } from '../MenuMobile';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export const Header = () => {
  const isMobile = useMedia('(max-width:700px)');
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <header className={styles.headerBG}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="ig.news" />
        {isMobile ? (
          <MenuMobile
            isActive={isMobileActive}
            setIsActive={setIsMobileActive}
          />
        ) : (
          <>
            <nav className={styles.headerNav}>
              <ActiveLink
                className={styles.headerLink}
                activeClassName={styles.active}
                href="/"
              >
                <a>Home</a>
              </ActiveLink>
              <ActiveLink
                className={styles.headerLink}
                activeClassName={styles.active}
                href="/posts"
              >
                <a>Posts</a>
              </ActiveLink>
            </nav>
            <SingInButton />
          </>
        )}
      </div>
    </header>
  );
};
