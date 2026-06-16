import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SkeletonGrid from "../../Components/SkeletonGrid";
import {
  ELECTRONICS_CATEGORIES,
  categoryLabel,
  fetchElectronicsProducts,
} from "../../utils/productsApi";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchElectronicsProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    const result = products
      .filter((product) =>
        product.title.toLowerCase().includes(search.trim().toLowerCase())
      )
      .filter((product) => category === "all" || product.category === category);

    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return b.discountPercentage - a.discountPercentage;
    });
  }, [products, search, category, sort]);

  return (
    <section className="content-section products-page page-transition">
      <div className="section-heading">
        <p className="eyebrow">Electronics only</p>
        <h1>Premium Devices</h1>
        <p>Smartphones, laptops, tablets, and mobile accessories from DummyJSON.</p>
      </div>

      <div className="filters-panel">
        <input
          type="search"
          placeholder="Search electronics..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">All Categories</option>
          {ELECTRONICS_CATEGORIES.map((item) => (
            <option key={item} value={item}>{categoryLabel(item)}</option>
          ))}
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="featured">Top Deals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {loading && <SkeletonGrid />}
      {error && <p className="empty-state">{error}</p>}
      {!loading && !error && (
        filteredProducts.length ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No electronics matched your search.</p>
        )
      )}
    </section>
  );
}

export default Products;
