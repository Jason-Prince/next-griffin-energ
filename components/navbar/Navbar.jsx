import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.padding}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.padding}>About</a>
      </Link>
      <Link href="/pc">
        <a className={styles.padding}>Chart</a>
      </Link>
    </>
  );
};

export default Navbar;
