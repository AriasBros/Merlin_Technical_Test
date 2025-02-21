'use client';

import SearchBar from "@/components/search_bar";

export default function Searcher() {
  function _handleChange(value: string) {
    console.log(value)
  }

  return (
    <SearchBar onChange={_handleChange} />
  );
}
