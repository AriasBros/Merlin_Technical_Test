import { CartItemInterface, CartItemModel } from "@/data/models/cart_item";

type MapCallback<T> = (item: CartItemInterface, index: number) => T;

export interface CartInterface {
  get totalPrice(): number;
  get itemsCount(): number;

  push(item: CartItemInterface): CartModel;
  remove(index: number): CartModel;

  map<T>(callback: MapCallback<T>): T[];
}

export class CartModel implements CartInterface {
  readonly items: CartItemInterface[];

  constructor(items: CartItemInterface[]) {
    this.items = items;
  }

  static empty(): CartModel {
    return new CartModel([]);
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

  push(item: CartItemInterface): CartModel {
    return new CartModel([
      ...this.items,
      new CartItemModel({
        product: item.product!,
        color: item.color!,
        storage: item.storage!,
      }),
    ]);
  }

  remove(index: number): CartModel {
    const item = this.items[index];
    const items = this.items.filter((i) => i !== item);

    return new CartModel(items);
  }

  map<T>(callback: MapCallback<T>): T[] {
    return this.items.map(callback);
  }
}
