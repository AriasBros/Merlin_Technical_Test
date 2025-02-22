'use client'

import {createContext, ReactNode, useContext} from "react";
import useSWR from "swr";
import {fetcher} from "@/data/fetchers/products";
import {ProductInterface} from "@/data/models/product";

interface Props {
  children?: ReactNode;
}

interface ProductsContextInterface {
  readonly data: ProductInterface[];
  readonly isLoading: boolean;
}

const ProductsContext = createContext<ProductsContextInterface>({data: [], isLoading: false});

export function ProductsProvider({ children }: Props) {
  const { data, isLoading } = useSWR<ProductInterface[]>(
    `${process.env.NEXT_PUBLIC_API_HOST}products?limit=21`,
    fetcher,
  );

  return (
    <ProductsContext.Provider value={{data: data ?? [], isLoading}}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts(): ProductsContextInterface {
  return useContext(ProductsContext);
}