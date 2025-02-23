import { ColorInterface } from "@/data/models/color";
import { StorageInterface } from "@/data/models/storage";

interface ProductProps {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly image: string;
  readonly price: number;

  readonly description?: string;
  readonly rating?: number;

  readonly specs?: SpecsInterface;
  readonly colors?: ColorInterface[];
  readonly storages?: StorageInterface[];
  readonly related?: ProductInterface[];
}

export interface ProductInterface extends ProductProps {
  getImage(color?: ColorInterface): string;
  getPrice(storage?: StorageInterface): number;
}

export interface SpecsInterface {
  readonly os?: string;
  readonly battery?: string;
  readonly processor?: string;
  readonly resolution?: string;
  readonly screen?: string;
  readonly screenRefreshRate?: string;
  readonly mainCamera?: string;
  readonly selfieCamera?: string;
}

export class ProductModel implements ProductInterface, SpecsInterface {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly image: string;
  readonly price: number;

  readonly description?: string;
  readonly rating?: number;

  readonly specs?: SpecsInterface;
  readonly colors?: ColorInterface[];
  readonly storages?: StorageInterface[];
  readonly related?: ProductInterface[];

  getImage(color?: ColorInterface): string {
    return color?.image ?? this.image;
  }

  getPrice(storage?: StorageInterface): number {
    return storage?.price ?? this.price;
  }

  get os() {
    return this.specs?.os;
  }

  get battery() {
    return this.specs?.battery;
  }

  get processor() {
    return this.specs?.processor;
  }

  get resolution() {
    return this.specs?.resolution;
  }

  get screen() {
    return this.specs?.screen;
  }

  get screenRefreshRate() {
    return this.specs?.screenRefreshRate;
  }

  get mainCamera() {
    return this.specs?.mainCamera;
  }

  get selfieCamera() {
    return this.specs?.selfieCamera;
  }

  constructor({
    id,
    name,
    brand,
    image,
    price,
    description,
    rating,
    specs,
    colors,
    storages,
    related,
  }: ProductProps) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.image = image;
    this.price = price;
    this.description = description;
    this.rating = rating;
    this.specs = specs;
    this.colors = colors;
    this.storages = storages;
    this.related = related;
  }
}
