import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.navbar__brand}>
        <img src="https://cdn.glitch.com/95f7c16f-2ead-449a-b1a5-ccc13ce52630%2Ffreefire.jpg?v=1628512794818" />
      </div>
      <ul className={styles.navbar__menus}>
        <li className={styles.navbar_navitem}>
          <Link href="#">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navbar_navitem}>
          <Link href="#">
            <a>Map</a>
          </Link>
        </li>
        <li className={styles.navbar_navitem}>
          <Link href="#">
            <a>News</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
