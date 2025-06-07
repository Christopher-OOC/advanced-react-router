import { useEffect, useState } from "react";
import { searchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Spinner from "../../components/Spinner";

function ProductList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let { products, isLoading, error } = useSelector((store) => store.products);

  useEffect(function () {
    dispatch(searchProducts());
  }, []);

  async function handleSearch(e) {
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
      {isLoading && !error && <Spinner />}
      {!isLoading && !error && products.length === 0 && <p>Empty products!</p>}
      {!isLoading && !error && (
        <div className="product__container">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
