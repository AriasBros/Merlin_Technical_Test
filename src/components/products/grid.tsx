"use client";

import styles from "./grid.module.scss";
import ProductItem from "@/components/products/card";
import { useProducts } from "@/data/providers/products";

export default function ProductsGrid() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <></>;
  }

  return (
    <ul className={styles.products_grid}>
      {data.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ul>
  );
}
