import styles from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

interface Props {
  image: string;
  id: string;
  name: string;
  brand: string;
  price: number;
  fixed?: boolean;
}

export default function ProductCard({
  id,
  name,
  brand,
  image,
  price,
  fixed = false,
}: Props) {
  const classes = clsx(
    styles.product_card,
    fixed ? styles["product_card--fixed"] : null,
  );

  return (
    <li className={classes}>
      <Link href={`/product/${id}`} className={styles.product_card__link}>
        <Image
          className={styles.product_card__image}
          src={image}
          alt={name}
          width={500}
          height={500}
          priority={true}
        />

        <div className={styles.product_card__details}>
          <span className={styles.product_card__details__brand}>{brand}</span>

          <span className={styles.product_card__details__name_price}>
            <span className={styles.product_card__details__name}>{name}</span>

            <span className={styles.product_card__details__price}>
              {price} EUR
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
}
