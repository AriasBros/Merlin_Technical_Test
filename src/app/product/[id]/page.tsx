import styles from "./page.module.scss";
import { ProductProvider } from "@/data/providers/product";
import ProductDetailsView from "@/components/products/details_view";
import BackBar from "@/components/back_bar";
import RelatedProducts from "@/components/products/related";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductRoute({ params }: Props) {
  const id: string = (await params).id;

  return (
    <ProductProvider id={id}>
      <div className={styles.product_route}>
        <BackBar href="/" title="Back to index" />
        <ProductDetailsView />
        <RelatedProducts />
      </div>
    </ProductProvider>
  );
}
