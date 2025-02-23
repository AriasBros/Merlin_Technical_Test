"use client";

import SearchBar from "@/components/search_bar";
import { useProducts } from "@/data/providers/products";

export default function Searcher() {
  const { data, isLoading, isSearching, performSearch, searchQuery } =
    useProducts();

  if (isLoading && !isSearching) {
    return <></>;
  }

  function _handleChange(value: string) {
    performSearch(value);
  }

  return (
    <SearchBar
      value={searchQuery}
      resultsCount={data.length}
      onChange={_handleChange}
    />
  );
}
