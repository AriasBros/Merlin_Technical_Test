"use client";

import styles from "../app_bar.module.scss";
import Link from "next/link";
import { clsx } from "clsx";
import { useCart } from "@/data/providers/cart";
import { usePathname } from "next/navigation";

export default function CartCounter() {
  const { cart } = useCart();
  const pathname = usePathname();

  if (pathname === "/cart") {
    return <></>;
  }

  const classes = clsx(
    styles.app_bar__cart_counter,
    cart.isEmpty ? styles["app_bar__cart_counter--empty"] : null,
  );

  return (
    <Link href="/cart" aria-label="Go to the cart" className={classes}>
      <span
        aria-hidden={true}
        className={styles.app_bar__cart_counter__icon}
      ></span>
      <span
        aria-label="Number of products in the cart"
        className={styles.app_bar__cart_counter__label}
      >
        {cart.itemsCount}
      </span>
    </Link>
  );
}
