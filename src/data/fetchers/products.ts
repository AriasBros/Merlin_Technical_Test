import {ProductInterface, ProductModel} from "@/data/models/product";

interface ProductPayload {
  readonly id: string;
  readonly brand: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly basePrice: number;
}

export async function fetcher(url: string): Promise<ProductInterface[]> {
  const response: ProductPayload[] = await (await fetch(url, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
    }
  })).json();

  // Because the API is responding with duplicated items, for example the item XMI-RN13P5G,
  // we filter the response to remove them.
  //
  // In this way we avoid the next error from Next.js when we render the items grid:
  //
  // Encountered two children with the same key, `XMI-RN13P5G`.
  // Keys should be unique so that components maintain their identity across updates.
  // Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
  //
  // Of course, this is a little hack for this challenge to avoid the bug in the API, the real solution should be to fix the API.
  const products: Record<string, ProductInterface> = {};

  for (const payload of response) {
    products[payload.id] = products[payload.id] ?? new ProductModel({
      id: payload.id,
      name: payload.name,
      brand: payload.brand,
      image: payload.imageUrl,
      price: payload.basePrice,
    });
  }

  return Object.values(products);
}