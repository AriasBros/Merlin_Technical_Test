import { ProductProvider } from "@/data/providers/product";
import ProductDetailsView from "@/components/products/details_view";
import BackBar from "@/components/back_bar";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductRoute({ params }: Props) {
  const id: string = (await params).id;

  return (
    <ProductProvider id={id}>
      <BackBar href="/" title="Back to index" />
      <ProductDetailsView />
    </ProductProvider>
  );
}
