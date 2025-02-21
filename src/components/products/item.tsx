import styles from './grid.module.scss';
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  id: string;
  name: string;
  brand: string;
  price: number;
}

export default function ProductItem({id, name, brand, image, price}: Props) {
  return (
    <li className={styles.products_grid__item}>
      <Link href={`/product/${id}`}>
        <Image className={styles.products_grid__item__image} src={image} alt={name} width={345} height={290} />

        <div className={styles.products_grid__item__details}>
          <span className={styles.products_grid__item__details__brand}>
            {brand}
          </span>

          <span className={styles.products_grid__item__details__name_price}>
            <span className={styles.products_grid__item__details__name}>
              {name}
            </span>

            <span className={styles.products_grid__item__details__price}>
              {price} EUR
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
}
