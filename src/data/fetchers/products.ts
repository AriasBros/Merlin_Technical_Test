import { ProductInterface } from "@/data/models/product";
import { default as fetch } from "./fetch";
import { modelFromPayload, ProductPayload } from "@/data/payloads/product";

export async function fetcher([url, limit, search]: [
  string,
  number,
  string,
]): Promise<ProductInterface[]> {
  const query: string[] = [];

  if (limit > 0) {
    query.push(`limit=${limit}`);
  }

  if (search) {
    query.push(`search=${search}`);
  }

  const response: ProductPayload[] = await fetch(`${url}?${query.join("&")}`);

  // Because the API is responding with duplicated items, for example the item XMI-RN13P5G,
  // we filter the response to remove them.
  //
  // In this way we avoid the error from Next.js when we render the items grid:
  //
  //  Encountered two children with the same key, `XMI-RN13P5G`.
  //  Keys should be unique so that components maintain their identity across updates.
  //  Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
  //
  // Of course, this is a little hack for this challenge to avoid the bug in the API, the real solution should be to fix the API.
  const products: Record<string, ProductInterface> = {};

  for (const payload of response) {
    products[payload.id] = products[payload.id] ?? modelFromPayload(payload);
  }

  return Object.values(products);
}
