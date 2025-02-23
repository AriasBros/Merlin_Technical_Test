"use client";

import styles from "./footer.module.scss";
import Button from "@/components/button";
import { useCart } from "@/data/providers/cart";

export default function CartFooter() {
  const { cart } = useCart();
  const total = cart.totalPrice;
  const cartIsEmpty = cart.itemsCount === 0;

  function _handleClick() {
    alert("Pay flow is next");
  }

  return (
    <footer className={styles.cart__footer}>
      {!cartIsEmpty && (
        <TotalCart className={styles.cart__footer__total} total={total} />
      )}

      <div className={styles.cart__footer__actions}>
        <Button
          className={styles.cart__footer__actions__continue_shopping}
          label="Continue Shopping"
          href="/"
        />

        {!cartIsEmpty && (
          <TotalCart
            className={styles.cart__footer__actions__total}
            total={total}
          />
        )}

        {!cartIsEmpty && (
          <Button
            className={styles.cart__footer__actions__pay}
            label="Pay"
            type="primary"
            onClick={_handleClick}
          />
        )}
      </div>
    </footer>
  );
}

function TotalCart({ total, className }: { total: number; className: string }) {
  return (
    <div className={className}>
      <span>Total</span>
      <span>{total} EUR</span>
    </div>
  );
}
