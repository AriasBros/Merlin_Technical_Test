'use client';

import SearchBar from "@/components/search_bar";
import {useProducts} from "@/data/providers/products";

export default function Searcher() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <></>;
  }

  function _handleChange(value: string) {
    console.log(value)
  }

  return (
    <SearchBar resultsCount={data.length} onChange={_handleChange} />
  );
}
