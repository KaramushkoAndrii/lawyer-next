import qs from "qs";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getData(url, query = {}, options = {}) {
  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });

  const fullUrl = `${API_URL}${url}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(fullUrl, {
    ...options,
    next: { revalidate: 60, ...options.next },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`error fetching ${url}, ${res.status}: ${errorText}`);
  }

  return res.json();
}
