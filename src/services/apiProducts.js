export async function getProducts(search) {
  const URL = "http://localhost:8080/api/v1/products";
  if (!search) {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Error occurs!!!");
    }
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(URL + `?search=${search}`);
    if (!res.ok) {
      throw new Error("Error occurs!!!");
    }
    const data = await res.json();
    return data;
  }
}
