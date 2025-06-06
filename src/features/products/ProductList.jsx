import { useState } from "react";

function ProductList() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
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
        <div className="product">Item</div>
      </div>
    </div>
  );
}

export default ProductList;
