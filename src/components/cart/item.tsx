"use client";

import styles from "./item.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  price: number;
  color: string;
  storage: string;
  onRemove: () => void;
}

export default function CartItem({
  name,
  image,
  price,
  storage,
  color,
  onRemove,
}: Props) {
  return (
    <li className={styles.cart_item}>
      <Image
        className={styles.cart_item__image}
        src={image}
        alt={name}
        width={200}
        height={200}
        priority={true}
      />

      <div className={styles.cart_item__details}>
        <h2 className={styles.cart_item__details__name}>
          {name}

          <span className={styles.cart_item__details__name__secondary_line}>
            {storage} | {color}
          </span>
        </h2>

        <div className={styles.cart_item__details__price}>{price} EUR</div>

        <button
          className={styles.cart_item__details__button}
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
