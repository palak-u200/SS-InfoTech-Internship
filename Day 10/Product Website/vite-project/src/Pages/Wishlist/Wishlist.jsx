import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useWishlist } from "../../Context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <section className="content-section page-transition">
      <div className="section-heading">
        <p className="eyebrow">Saved pieces</p>
        <h1>Wishlist</h1>
      </div>

      {wishlist.length ? (
        <div className="products-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Your wishlist is empty.</p>
          <Link to="/products" className="gold-button">Browse Products</Link>
        </div>
      )}
    </section>
  );
}

export default Wishlist;
