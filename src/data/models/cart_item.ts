import { ProductInterface } from "@/data/models/product";
import { ColorInterface } from "@/data/models/color";
import { StorageInterface } from "@/data/models/storage";

export interface CartItemProperties {
  readonly product: ProductInterface;
  readonly color: ColorInterface;
  readonly storage: StorageInterface;
}

export interface CartItemInterface extends CartItemProperties {
  get price(): number;
}

export class CartItemModel implements CartItemInterface {
  readonly product: ProductInterface;
  readonly color: ColorInterface;
  readonly storage: StorageInterface;

  get price(): number {
    return this.product.getPrice(this.storage);
  }

  constructor({ product, color, storage }: CartItemProperties) {
    this.product = product;
    this.color = color;
    this.storage = storage;
  }
}
