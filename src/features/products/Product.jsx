function Product({ product }) {
  return (
    <div className="product">
      <img />
      <div>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
}

export default Product;
