export async function getAnimeResponse(resource) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`);
  const anime = await response.json();
  return anime;
}

export async function getNestedAnimeResponse(resource, objectProperty) {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
}

export function reproduce(data, gap) {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = { data: data.slice(first, last) };
  return response;
}
