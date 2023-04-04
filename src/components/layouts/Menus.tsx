import Link from 'next/link';

import * as styles from './Menus.css';

const Menus = () => {
  return (
    <>
      <Link href="/about" passHref>
        <a className={styles.menuItem}>About</a>
      </Link>
      <Link href="/blog" passHref>
        <a className={styles.menuItem}>Blog</a>
      </Link>
      <Link href="https://github.com/restareaByWeezy" passHref>
        <a className={styles.menuItem}>Github</a>
      </Link>
    </>
  );
};

export default Menus;
