import { useState } from "react";
import { searchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

function ProductList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((store) => store.products);

  function handleSearch(e) {
    e.preventDefault();
    dispatch(searchProducts(search));
  }

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={(e) => handleSearch(e)}>Search</button>
        </div>
        <div>Number of search: {products.length}</div>
      </form>
      <div className="product__container">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
