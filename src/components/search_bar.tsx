import styles from "./search_bar.module.scss";
import Image from "next/image";
import {ChangeEvent, useState} from "react";
import {clsx} from "clsx";

interface SearchBarProps {
  resultsCount?: number;
  onChange: (value: string) => void;
}

export default function SearchBar({ resultsCount, onChange }: SearchBarProps) {
  const [text, setText] = useState('');
  const classes = clsx(
    styles.search_bar,
    text.length === 0 ? styles['search_bar--empty'] : null,
    resultsCount === null || resultsCount === undefined ? styles['search_bar--searching'] : null,
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

      <SearchBarBottom resultsCount={resultsCount} />
    </div>
  );
}

function SearchBarBottom({resultsCount}: {resultsCount?: number}) {
  return (
    <div className={styles.search_bar__bottom}>
      {resultsCount} {resultsCount === 1 ? 'Result' : 'Results'}
    </div>
  );
}