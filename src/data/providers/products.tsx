"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/data/fetchers/products";
import { ProductInterface } from "@/data/models/product";

interface Props {
  children?: ReactNode;
}

interface ProductsContextInterface {
  readonly data: ProductInterface[];
  readonly isLoading: boolean;
  readonly isSearching: boolean;
  readonly searchQuery: string | null;
  readonly performSearch: (value: string) => void;
}

const ProductsContext = createContext<ProductsContextInterface>({
  data: [],
  isLoading: false,
  isSearching: false,
  searchQuery: null,
  performSearch: () => {},
});

let _timeout: NodeJS.Timeout;

export function ProductsProvider({ children }: Props) {
  const [searchQuery, performSearch] = useState<string | null>(null);
  const { data, isLoading } = useSWR<ProductInterface[]>(
    [`${process.env.NEXT_PUBLIC_API_HOST}products`, 21, searchQuery],
    fetcher,
  );

  return (
    <ProductsContext.Provider
      value={{
        data: data ?? [],
        isSearching: !!searchQuery && searchQuery.length > 0,
        isLoading,
        searchQuery,
        performSearch: (value) => {
          clearTimeout(_timeout);
          _timeout = setTimeout(() => {
            performSearch(value);
          }, 300);
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts(): ProductsContextInterface {
  return useContext(ProductsContext);
}
