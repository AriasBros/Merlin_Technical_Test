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
  type = type || "standard";

  const classes = clsx(
    styles.button,
    className,
    styles[`button--${type}`],
    dense ? styles[`button--dense`] : null,
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
