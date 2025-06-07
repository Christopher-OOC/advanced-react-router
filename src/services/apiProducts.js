const URL = "http://localhost:8080/api/v1/products";

export async function getProducts(search) {
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

export async function addProduct(productFormData) {
  const res = await fetch(URL, {
    method: "POST",
    body: productFormData,
  });

  if (!res.ok) {
    throw new Error("Error while adding a new product!");
  }
  // const data = await res.json();

  // return data;
}
