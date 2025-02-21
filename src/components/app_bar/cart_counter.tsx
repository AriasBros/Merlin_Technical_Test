import styles from "../app_bar.module.scss";
import Link from "next/link";

export default function CartCounter() {
  return (
    <Link href='/cart' aria-label='Go to the cart' className={styles.app_bar__cart_counter}>
      <span aria-hidden={true} className={styles.app_bar__cart_counter__icon}></span>
      <span aria-label='Number of products in the cart' className={styles.app_bar__cart_counter__label}>0</span>
    </Link>
  );
}
