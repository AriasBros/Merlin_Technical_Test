import styles from "./storage_picker.module.scss";
import { clsx } from "clsx";
import { StorageInterface } from "@/data/models/storage";
import { useState } from "react";

interface Props {
  className?: string;
  values?: StorageInterface[];
  defaultValue?: StorageInterface;
  onChangeSelection: (value: StorageInterface) => void;
}

export default function ProductStoragePicker({
  className,
  values,
  defaultValue,
  onChangeSelection,
}: Props) {
  const classes = clsx(className, styles.product_storage_picker);
  const [value, setValue] = useState<StorageInterface | undefined>(
    defaultValue,
  );

  function _handleClick(value: StorageInterface) {
    onChangeSelection(value);
    setValue(value);
  }

  return (
    <div className={classes}>
      <h2 className={styles.product_storage_picker__label}>
        Storage. How much space do you need?
      </h2>

      <ul className={styles.product_storage_picker__list}>
        {values?.map((val) => (
          <ProductStorageItem
            key={val.id}
            value={val}
            selected={val.id === value?.id}
            onClick={_handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

function ProductStorageItem({
  value,
  selected,
  onClick,
}: {
  value: StorageInterface;
  selected?: boolean;
  onClick: (value: StorageInterface) => void;
}) {
  const classes = clsx(
    styles.product_storage_picker__item,
    selected ? styles["product_storage_picker__item--selected"] : null,
  );

  return (
    <li className={classes}>
      <button
        className={styles.product_storage_picker__item__button}
        onClick={() => onClick(value)}
      >
        {value.capacity}
      </button>
    </li>
  );
}
