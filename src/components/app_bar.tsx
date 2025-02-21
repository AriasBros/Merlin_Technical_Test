import styles from "./app_bar.module.scss";
import Image from "next/image";
import CartCounter from "@/components/app_bar/cart_counter";
import Link from "next/link";

export default function AppBar() {
  return (
    <header className={styles.app_bar}>
      <Link href='/' aria-label='Go to the index page'>
        <Image src='/brand_logo.svg' alt='Brand Logotype' width={77} height={30} priority={true} />
      </Link>

      <CartCounter />
    </header>
  );
}
