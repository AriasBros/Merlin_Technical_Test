import styles from "./search_bar.module.scss";
import Image from "next/image";
import {ChangeEvent, useState} from "react";
import {clsx} from "clsx";

interface SearchBarProps {
  onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
  const [text, setText] = useState('');
  const classes = clsx(
    styles.search_bar,
    text.length === 0 ? styles['search_bar--empty'] : null,
  );

  function _setText(value: string) {
    setText(value);
    onChange(value);
  }

  function _handleChange(event: ChangeEvent<HTMLInputElement>) {
    _setText(event.target.value);
  }

  function _handleClick() {
    _setText('');
  }

  return (
    <div className={classes}>
      <div className={styles.search_bar__text_field}>
        <input
          className={styles.search_bar__text_field__input}
          name='search'
          type='text'
          value={text}
          placeholder='Search for a smartphone...'
          aria-label='Search for a smartphone'
          onChange={_handleChange}
        />

        <button aria-label='Clear search' className={styles.search_bar__text_field__clear_button} onClick={_handleClick}>
          <Image aria-hidden={true} src='/icons/close.svg' alt='Brand Logotype' width={8} height={8} priority={true} />
        </button>
      </div>

      <div className={styles.search_bar__bottom}>
        20 Results
      </div>
    </div>
  );
}
