import { default as fetch } from "./fetch";
import { ProductInterface } from "@/data/models/product";
import { modelFromPayload } from "@/data/payloads/product";

export async function fetcher(url: string): Promise<ProductInterface> {
  return modelFromPayload(await fetch(url));
}
