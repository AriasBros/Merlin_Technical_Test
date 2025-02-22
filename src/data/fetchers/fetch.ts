export default async function fetcher<T>(url: string): Promise<T> {
  return (await fetch(url, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
    }
  })).json();
}