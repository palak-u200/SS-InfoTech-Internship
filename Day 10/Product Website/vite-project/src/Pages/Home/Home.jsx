import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SkeletonGrid from "../../Components/SkeletonGrid";
import heroImage from "../../assets/hero.png";
import {
  ELECTRONICS_CATEGORIES,
  categoryLabel,
  fetchElectronicsProducts,
} from "../../utils/productsApi";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchElectronicsProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const featured = useMemo(() => products.slice(0, 4), [products]);
  const deals = useMemo(
    () => [...products].sort((a, b) => b.discountPercentage - a.discountPercentage).slice(0, 4),
    [products]
  );
  const trending = useMemo(
    () => [...products].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [products]
  );

  return (
    <div className="page-transition">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Black & gold electronics boutique</p>
          <h1>TechLuxe</h1>
          <p>
            Discover refined smartphones, laptops, tablets, and accessories with
            fast shopping flows built for a premium e-commerce experience.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="gold-button">Shop Electronics</Link>
            <Link to="/products?sort=rating" className="ghost-button">Explore Trends</Link>
          </div>
        </div>
        <div className="hero-device">
          <img src={heroImage} alt="Premium electronics collection" />
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Featured</p>
          <h2>Signature Picks</h2>
        </div>
        {loading ? <SkeletonGrid count={4} /> : <div className="products-grid">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Top deals</p>
          <h2>Luxury Value</h2>
        </div>
        {loading ? <SkeletonGrid count={4} /> : <div className="products-grid">{deals.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
      </section>

      <section className="content-section split-section">
        <div>
          <p className="eyebrow">Categories</p>
          <h2>Shop By Device</h2>
        </div>
        <div className="category-grid">
          {ELECTRONICS_CATEGORIES.map((category) => (
            <Link to="/products" className="category-tile" key={category}>
              {categoryLabel(category)}
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Trending</p>
          <h2>Highly Rated Tech</h2>
        </div>
        {loading ? <SkeletonGrid count={4} /> : <div className="products-grid">{trending.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
      </section>

      <section className="newsletter-section">
        <p className="eyebrow">Newsletter</p>
        <h2>Private drops, early deals, refined tech notes.</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Email address" />
          <button className="gold-button" type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
