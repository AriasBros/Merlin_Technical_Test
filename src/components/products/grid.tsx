"use client";

import styles from "./grid.module.scss";
import ProductItem from "@/components/products/card";
import { useProducts } from "@/data/providers/products";
import Spinner from "@/components/spinner";

export default function ProductsGrid() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Spinner centered size="sm" />;
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
