import { ProductInterface, ProductModel } from "@/data/models/product";
import { ColorInterface, ColorModel } from "@/data/models/color";
import { StorageInterface, StorageModel } from "@/data/models/storage";

export interface ProductPayload {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly basePrice: number;

  readonly description?: string;
  readonly rating?: number;
  readonly specs?: SpecsPayload;
  readonly colorOptions?: ColorOptionPayload[];
  readonly storageOptions?: StorageOptionPayload[];
  readonly similarProducts?: ProductPayload[];
}

interface ColorOptionPayload {
  readonly hexCode: string;
  readonly imageUrl: string;
  readonly name: string;
}

interface StorageOptionPayload {
  readonly capacity: string;
  readonly price: number;
}

interface SpecsPayload {
  readonly os: string;
  readonly battery: string;
  readonly processor: string;
  readonly resolution: string;
  readonly screen: string;
  readonly screenRefreshRate: string;
  readonly mainCamera: string;
  readonly selfieCamera: string;
}

export function modelFromPayload(payload: ProductPayload): ProductModel {
  return new ProductModel({
    id: payload.id,
    name: payload.name,
    brand: payload.brand,
    image: payload.imageUrl ?? payload.colorOptions![0].imageUrl,
    price: payload.basePrice,
    description: payload.description,
    rating: payload.rating,
    specs: payload.specs,
    colors: _colorsFromPayload(payload.colorOptions),
    storages: _storagesFromPayload(payload.storageOptions),
    related: _relatedFromPayload(payload.similarProducts),
  });
}

function _storagesFromPayload(payload?: StorageOptionPayload[]) {
  const storages: StorageInterface[] = [];

  if (payload) {
    for (const storage of payload) {
      storages.push(
        new StorageModel({
          capacity: storage.capacity,
          price: storage.price,
        }),
      );
    }
  }

  return storages;
}

function _colorsFromPayload(payload?: ColorOptionPayload[]) {
  const colors: ColorInterface[] = [];

  if (payload) {
    for (const color of payload) {
      colors.push(
        new ColorModel({
          code: color.hexCode,
          image: color.imageUrl,
          name: color.name,
        }),
      );
    }
  }

  return colors;
}

function _relatedFromPayload(payload?: ProductPayload[]) {
  const products: ProductInterface[] = [];

  if (payload) {
    for (const product of payload) {
      products.push(modelFromPayload(product));
    }
  }

  return products;
}
