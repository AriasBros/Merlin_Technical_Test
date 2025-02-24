"use client";

import { createContext, ReactNode, useContext } from "react";
import useSWR from "swr";
import { fetcher } from "@/data/fetchers/product";
import { ProductInterface } from "@/data/models/product";

interface Props {
  id: string;
  children?: ReactNode;
}

interface ProductContextInterface {
  readonly data: ProductInterface | null | undefined;
  readonly isLoading: boolean;
}

const ProductContext = createContext<ProductContextInterface>({
  data: null,
  isLoading: false,
});

export function ProductProvider({ id, children }: Props) {
  const { data, isLoading } = useSWR<ProductInterface>(
    `${process.env.NEXT_PUBLIC_API_HOST}products/${id}`,
    fetcher,
    {
      errorRetryCount: 2,
    },
  );

  return (
    <ProductContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct(): ProductContextInterface {
  return useContext(ProductContext);
}
