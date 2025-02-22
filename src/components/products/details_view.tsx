"use client";

import styles from "./details_view.module.scss";
import { useProduct } from "@/data/providers/product";
import Spinner from "@/components/spinner";
import ProductInfo from "@/components/products/details_view/info";
import ProductSpecs from "@/components/products/details_view/specs";
import { StorageInterface } from "@/data/models/storage";
import { ColorInterface } from "@/data/models/color";
import { useState } from "react";

export default function ProductDetailsView() {
  const [color, setColor] = useState<ColorInterface>();
  const [storage, setStorage] = useState<StorageInterface>();
  const { data, isLoading } = useProduct();

  if (isLoading) {
    return <Spinner centered size="sm" />;
  }

  function handleAddToCart() {
    console.log("handleAddToCart");
  }

  return (
    <div className={styles.product_details_view}>
      <ProductInfo
        product={data!}
        storage={storage}
        color={color}
        onSelectStorage={setStorage}
        onSelectColor={setColor}
        onAddToCart={handleAddToCart}
      />
      <ProductSpecs product={data!} />
    </div>
  );
}
