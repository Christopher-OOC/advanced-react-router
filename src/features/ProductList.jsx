function ProductList() {
  return (
    <div>
      <form>
        <div>
          <input type="text" id="search" />
          <button>Search</button>
        </div>
      </form>
      <div className="product__container">
        <div>Item</div>
        <div>Item</div>
        <div>Item</div>
        <div>Item</div>
      </div>
    </div>
  );
}

export default ProductList;
