import { useEffect, useState } from "react";
import { searchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Spinner from "../../components/Spinner";
import { getProducts } from "../../services/apiProducts";

function ProductList() {
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const dispatch = useDispatch();
  let { products, isLoading, error } = useSelector((store) => store.products);

  useEffect(
    function () {
      async function fetchData() {
        const data = await getProducts();
        setSearchProduct(data);
      }

      fetchData();
    },
    [search]
  );

  async function handleSearch(e) {
    e.preventDefault();
    const data = await getProducts(search);
    setSearchProduct(data);
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
        <div>Number of search: {searchProduct.length}</div>
      </form>
      {isLoading && !error && <Spinner />}
      {!isLoading && !error && searchProduct.length === 0 && (
        <p>Empty products!</p>
      )}
      {!isLoading && !error && (
        <div className="product__container">
          {searchProduct.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
