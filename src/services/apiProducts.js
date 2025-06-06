export async function getProducts(search) {
     const URL = "http://localhost:8080/api/v1/products";
    if (!search) {
      const res = await fetch(URL);
      if (!res.ok) {
        dispatch({ type: "products/searchError" });
      }
      const data = await res.json();
}
