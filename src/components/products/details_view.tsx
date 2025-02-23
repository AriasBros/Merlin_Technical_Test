"use client";

import styles from "./details_view.module.scss";
import { useProduct } from "@/data/providers/product";
import Spinner from "@/components/spinner";
import ProductInfo from "@/components/products/details_view/info";
import ProductSpecs from "@/components/products/details_view/specs";
import { StorageInterface } from "@/data/models/storage";
import { ColorInterface } from "@/data/models/color";
import { useState } from "react";
import { CartActionType, useCart } from "@/data/providers/cart";

export default function ProductDetailsView() {
  const [color, setColor] = useState<ColorInterface>();
  const [storage, setStorage] = useState<StorageInterface>();
  const { data, isLoading } = useProduct();
  const { dispatch } = useCart();

  if (isLoading) {
    return <Spinner centered size="sm" />;
  }

  function handleAddToCart() {
    dispatch({
      type: CartActionType.Add,
      product: data!,
      color,
      storage,
    });
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
