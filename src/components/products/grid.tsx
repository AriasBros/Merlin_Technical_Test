import styles from './grid.module.scss';
import ProductItem from "@/components/products/item";

export default function ProductsGrid() {
  return (
    <ul className={styles.products_grid}>
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
      <ProductItem id='APL-I15PM' name='iPhone 15 Pro' brand='Apple' price={1219} image='http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png' />
    </ul>
  );
}
