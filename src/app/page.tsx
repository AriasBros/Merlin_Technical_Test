import styles from './page.module.scss';
import Searcher from "@/components/searcher";
import ProductsGrid from "@/components/products/grid";
import {ProductsProvider} from "@/data/providers/products";

export default function IndexRoute() {
  return (
    <div className={styles.index_route}>
      <ProductsProvider>
        <Searcher />
        <ProductsGrid />
      </ProductsProvider>
    </div>
  );
}
