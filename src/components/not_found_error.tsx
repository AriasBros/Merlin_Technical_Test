import styles from "./not_found_error.module.scss";

interface Props {
  message?: string;
}

export default function NotFoundError({ message }: Props) {
  return (
    <div className={styles.not_found_error}>
      <div>
        <h1 className={styles.not_found_error__code}>404</h1>
        <div className={styles.not_found_error__message}>
          <h2 className={styles.not_found_error__message__text}>
            {message || "This page could not be found."}
          </h2>
        </div>
      </div>
    </div>
  );
}
