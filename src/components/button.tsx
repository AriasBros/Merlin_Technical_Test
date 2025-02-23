import styles from "./button.module.scss";
import { clsx } from "clsx";
import Link from "next/link";

interface Props {
  label: string;
  className?: string;
  href?: string;
  type?: "primary" | "standard";
  dense?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  label,
  className,
  href,
  onClick,
  type = "standard",
  dense = false,
  disabled = false,
}: Props) {
  const classes = clsx(
    styles.button,
    className,
    dense ? styles[`button--dense`] : null,
    type ? styles[`button--${type}`] : null,
    disabled ? styles["button--disabled"] : null,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
