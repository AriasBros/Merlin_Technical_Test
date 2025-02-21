import styles from './page.module.scss';
import Searcher from "@/components/searcher";
import ProductsGrid from "@/components/products/grid";

export default function IndexRoute() {
  return (
    <div className={styles.index_route}>
      <Searcher />
      <ProductsGrid />
    </div>
  );
}
