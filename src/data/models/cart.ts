import {
  CartItemInterface,
  CartItemModel,
  CartItemProperties,
} from "@/data/models/cart_item";
import { ProductModel } from "@/data/models/product";
import { ColorModel } from "@/data/models/color";
import { StorageModel } from "@/data/models/storage";

type MapCallback<T> = (item: CartItemInterface, index: number) => T;

export interface CartInterface {
  get totalPrice(): number;
  get itemsCount(): number;
  get isEmpty(): boolean;

  push(item: CartItemProperties): CartModel;
  remove(index: number): CartModel;

  map<T>(callback: MapCallback<T>): T[];
}

export class CartModel implements CartInterface {
  private readonly items: CartItemInterface[];

  constructor(items: CartItemInterface[]) {
    this.items = items;
  }

  static empty(): CartModel {
    return new CartModel([]);
  }

  static saved(): CartModel {
    const savedData =
      typeof window !== "undefined" ? localStorage.getItem("cart") : null;
    const initialData: CartItemInterface[] = [];

    if (savedData) {
      const jsonData = JSON.parse(savedData);

      for (const item of jsonData) {
        initialData.push(
          new CartItemModel({
            product: new ProductModel(item.product),
            color: new ColorModel(item.color),
            storage: new StorageModel(item.storage),
          }),
        );
      }
    }

    return new CartModel(initialData);
  }

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  get totalPrice(): number {
    let price = 0;

    for (const item of this.items) {
      price += item.price;
    }

    return price;
  }

  get itemsCount(): number {
    return this.items.length;
  }

  push(item: CartItemProperties): CartModel {
    const cart = new CartModel([
      ...this.items,
      new CartItemModel({
        product: item.product!,
        color: item.color!,
        storage: item.storage!,
      }),
    ]);

    localStorage.setItem("cart", JSON.stringify(cart.items));

    return cart;
  }

  remove(index: number): CartModel {
    const item = this.items[index];
    const items = this.items.filter((i) => i !== item);
    const cart = new CartModel(items);

    localStorage.setItem("cart", JSON.stringify(cart.items));

    return cart;
  }

  map<T>(callback: MapCallback<T>): T[] {
    return this.items.map(callback);
  }
}
