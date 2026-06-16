import "./Products.css";
import products from "../Data/products";
import ProductCard from "../Components/ProductCard/ProductCard";

function Products() {
  return (
    <div className="products-page">
      <h1>Products Page</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;