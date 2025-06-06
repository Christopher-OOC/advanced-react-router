import { useState } from "react";
import { searchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);

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
      </form>
      <div className="product__container">
        {products.map((product) => (
          <div className="product">Item</div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
