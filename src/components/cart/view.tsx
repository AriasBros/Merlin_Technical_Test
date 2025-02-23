"use client";

import styles from "./view.module.scss";
import { CartActionType, useCart } from "@/data/providers/cart";
import CartItem from "@/components/cart/item";

export default function CartView() {
  const { cart, dispatch } = useCart();

  function _handleClick(index: number) {
    dispatch({
      type: CartActionType.Remove,
      index,
    });
  }

  return (
    <div className={styles.cart_view}>
      <h1 className={styles.cart_view__title}>Cart ({cart.itemsCount})</h1>

      <ul className={styles.cart_view__list}>
        {cart.map((item, index) => (
          <CartItem
            key={`${item.product.id}-${index}`}
            name={item.product.name}
            image={item.product.getImage(item.color)}
            price={item.product.getPrice(item.storage)}
            color={item.color.name}
            storage={item.storage.capacity}
            onRemove={() => _handleClick(index)}
          />
        ))}
      </ul>
    </div>
  );
}
