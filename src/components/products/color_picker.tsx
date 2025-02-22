import { clsx } from "clsx";
import styles from "@/components/products/color_picker.module.scss";
import { ColorInterface } from "@/data/models/color";
import { useState } from "react";

interface Props {
  className?: string;
  values?: ColorInterface[];
  defaultValue?: ColorInterface;
  onChangeSelection: (value: ColorInterface) => void;
}

export default function ProductColorPicker({
  className,
  values,
  defaultValue,
  onChangeSelection,
}: Props) {
  const classes = clsx(className, styles.product_color_picker);
  const [value, setValue] = useState<ColorInterface | undefined>(defaultValue);

  function _handleClick(value: ColorInterface) {
    onChangeSelection(value);
    setValue(value);
  }

  return (
    <div className={classes}>
      <h2 className={styles.product_color_picker__label}>
        Color. Pick Your Favourite.
      </h2>

      <ul className={styles.product_color_picker__list}>
        {values?.map((val) => (
          <ProductColorItem
            key={val.id}
            value={val}
            selected={val.id === value?.id}
            onClick={_handleClick}
          />
        ))}
      </ul>

      <div className={styles.product_color_picker__selection}>
        {value?.name}
      </div>
    </div>
  );
}

function ProductColorItem({
  value,
  selected,
  onClick,
}: {
  value: ColorInterface;
  selected?: boolean;
  onClick: (value: ColorInterface) => void;
}) {
  const classes = clsx(
    styles.product_color_picker__item,
    selected ? styles["product_color_picker__item--selected"] : null,
  );

  const style = {
    backgroundColor: value.code,
  };

  return (
    <li className={classes}>
      <button
        className={styles.product_color_picker__item__button}
        onClick={() => onClick(value)}
      >
        <span
          style={style}
          className={styles.product_color_picker__item__swatch}
        ></span>
      </button>
    </li>
  );
}
