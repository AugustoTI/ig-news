import Link from 'next/link';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

interface MenuMobileProps {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
}

export const MenuMobile = ({ isActive, setIsActive }: MenuMobileProps) => {
  return (
    <>
      <button
        className={styles.buttonMobile}
        onClick={() => setIsActive(true)}
        type="button"
        aria-label="Menu"
      >
        <IoMdMenu size={25} />
      </button>

      {isActive && (
        <div className={styles.container}>
          <IoMdClose
            size={25}
            aria-label="Fechar menu"
            onClick={() => setIsActive(false)}
          />
          <nav className={styles.headerNavMobile}>
            <SingInButton />
            <Link href="/">
              <a onClick={() => setIsActive(false)}>Home</a>
            </Link>
            <Link href="/posts">
              <a onClick={() => setIsActive(false)}>Posts</a>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
