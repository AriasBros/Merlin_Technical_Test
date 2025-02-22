import styles from "./spinner.module.scss";
import { clsx } from "clsx";

interface SpinnerProps {
  centered?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Spinner({ centered, size }: SpinnerProps) {
  const classes = clsx(
    styles.spinner,
    centered ? styles["spinner--centered"] : null,
    size ? styles[`spinner--${size}`] : null,
  );

  return (
    <div className={classes}>
      <div className={styles.spinner__bar}></div>
      <div className={styles.spinner__bar}></div>
      <div className={styles.spinner__bar}></div>
    </div>
  );
}
