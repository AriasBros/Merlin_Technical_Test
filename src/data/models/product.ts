export interface ProductInterface {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly image: string;
  readonly price: number;
}

export class ProductModel implements ProductInterface {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly image: string;
  readonly price: number;

  constructor({id, name, brand, image, price}: ProductInterface) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.image = image;
    this.price = price;
  }
}
