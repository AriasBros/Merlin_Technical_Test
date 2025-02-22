import styles from "./info.module.scss";
import Image from "next/image";
import ProductStoragePicker from "@/components/products/storage_picker";
import ProductColorPicker from "@/components/products/color_picker";
import { ProductInterface } from "@/data/models/product";
import { StorageInterface } from "@/data/models/storage";
import { ColorInterface } from "@/data/models/color";
import Button from "@/components/button";

interface Props {
  product: ProductInterface;
  storage?: StorageInterface;
  color?: ColorInterface;
  onSelectStorage: (storage: StorageInterface) => void;
  onSelectColor: (color: ColorInterface) => void;
  onAddToCart: () => void;
}

export default function ProductInfo({
  product,
  storage,
  color,
  onSelectStorage,
  onSelectColor,
  onAddToCart,
}: Props) {
  const addToCartIsDisabled = !storage || !color;

  return (
    <div className={styles.product_info}>
      <Image
        className={styles.product_info__image}
        src={product.getImage(color)}
        alt={product.name}
        width={200}
        height={200}
        priority={true}
      />

      <div className={styles.product_info__wrapper}>
        <h1 className={styles.product_info__name}>{product.name}</h1>
        <ProductInfoPrice product={product} storage={storage} />

        <ProductStoragePicker
          className={styles.product_info__storage_picker}
          values={product.storages}
          defaultValue={storage}
          onChangeSelection={onSelectStorage}
        />

        <ProductColorPicker
          className={styles.product_info__color_picker}
          values={product.colors}
          defaultValue={color}
          onChangeSelection={onSelectColor}
        />

        <Button
          label="Add to Cart"
          type="primary"
          disabled={addToCartIsDisabled}
          onClick={onAddToCart}
        />
      </div>
    </div>
  );
}

function ProductInfoPrice({
  product,
  storage,
}: {
  product: ProductInterface;
  storage?: StorageInterface;
}) {
  let price;

  if (!storage) {
    price = `From ${product.price} EUR`;
  } else {
    price = `${storage.price} EUR`;
  }

  return <span className={styles.product_info__price}>{price}</span>;
}
