import styles from "./specs.module.scss";
import { ProductInterface, SpecsInterface } from "@/data/models/product";

interface Props {
  product: ProductInterface & SpecsInterface;
}

export default function ProductSpecs({ product }: Props) {
  return (
    <div className={styles.product_specs}>
      <h2 className={styles.product_specs__title}>Specifications</h2>

      <table className={styles.product_specs__table}>
        <tbody>
          <ProductSpecsRow label="Brand" data={product.brand} />
          <ProductSpecsRow label="Name" data={product.name} />
          <ProductSpecsRow label="Description" data={product.description} />
          <ProductSpecsRow label="Screen" data={product.screen} />
          <ProductSpecsRow label="Resolution" data={product.resolution} />
          <ProductSpecsRow label="Processor" data={product.processor} />
          <ProductSpecsRow label="Main Camera" data={product.mainCamera} />
          <ProductSpecsRow label="Selfie Camera" data={product.selfieCamera} />
          <ProductSpecsRow label="Battery" data={product.battery} />
          <ProductSpecsRow label="OS" data={product.os} />
          <ProductSpecsRow
            label="Screen Refresh Rate"
            data={product.screenRefreshRate}
          />
        </tbody>
      </table>
    </div>
  );
}

function ProductSpecsRow({ label, data }: { label: string; data?: string }) {
  return (
    <tr className={styles.product_specs__table__row}>
      <td className={styles.product_specs__table__label}>{label}</td>
      <td className={styles.product_specs__table__data}>{data}</td>
    </tr>
  );
}
