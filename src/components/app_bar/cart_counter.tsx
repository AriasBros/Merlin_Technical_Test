"use client";

import styles from "../app_bar.module.scss";
import Link from "next/link";
import { clsx } from "clsx";
import { useCart } from "@/data/providers/cart";

export default function CartCounter() {
  const { cart } = useCart();

  const classes = clsx(
    styles.app_bar__cart_counter,
    styles["app_bar__cart_counter--empty"], // TODO - Add logic.
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
