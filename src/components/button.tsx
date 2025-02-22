import styles from "./button.module.scss";
import { clsx } from "clsx";

interface Props {
  label: string;
  type?: "primary" | "standard";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  label,
  onClick,
  type = "standard",
  disabled = false,
}: Props) {
  const classes = clsx(
    styles.button,
    type ? styles[`button--${type}`] : null,
    disabled ? styles["button--disabled"] : null,
  );

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
