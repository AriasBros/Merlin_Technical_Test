"use client";

import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { ProductInterface } from "@/data/models/product";
import { ColorInterface } from "@/data/models/color";
import { StorageInterface } from "@/data/models/storage";
import { CartInterface, CartModel } from "@/data/models/cart";

export enum CartActionType {
  Add = "Add",
  Remove = "Remove",
}

interface CartAction {
  type: CartActionType;
  index?: number;
  product?: ProductInterface;
  color?: ColorInterface;
  storage?: StorageInterface;
}

interface CartContextInterface {
  readonly cart: CartInterface;
  readonly dispatch: ActionDispatch<[action: CartAction]>;
}

function reducer(cart: CartInterface, action: CartAction): CartInterface {
  switch (action.type) {
    case CartActionType.Add:
      return cart.push({
        product: action.product!,
        color: action.color!,
        storage: action.storage!,
      });

    case CartActionType.Remove:
      return cart.remove(action.index!);
  }
}

const CartContext = createContext<CartContextInterface | null>(null);

interface Props {
  children?: ReactNode;
}

export function CartProvider({ children }: Props) {
  const [cart, dispatch] = useReducer(reducer, CartModel.empty());

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextInterface {
  return useContext(CartContext)!;
}
