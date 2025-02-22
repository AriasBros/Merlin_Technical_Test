import styles from "./back_bar.module.scss";
import Link from "next/link";
import { UrlObject } from "node:url";
import Icon from "@/components/icon";

interface Props {
  href: string | UrlObject;
  title: string;
}

export default function BackBar({ href, title }: Props) {
  return (
    <nav className={styles.back_bar}>
      <Link href={href} title={title} className={styles.back_bar__link}>
        <Icon id="chevron_left" size={20} /> Back
      </Link>
    </nav>
  );
}
