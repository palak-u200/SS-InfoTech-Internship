import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useToast } from "../../Context/ToastContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { notify } = useToast();

  return (
    <article className="product-card">
      <button
        className={`wish-button ${isWishlisted(product.id) ? "active" : ""}`}
        type="button"
        aria-label="Toggle wishlist"
        onClick={() => {
          const added = toggleWishlist(product);
          notify(added ? "Added to wishlist" : "Removed from wishlist", "info");
        }}
      >
        ♥
      </button>
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </Link>
      <div className="product-info">
        <p className="eyebrow">{product.brand || product.category}</p>
        <h3>{product.title}</h3>
        <div className="product-meta">
          <span>${product.price}</span>
          <span>★ {product.rating}</span>
        </div>
        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="ghost-button">Details</Link>
          <button
            className="gold-button"
            type="button"
            onClick={() => {
              addToCart(product);
              notify("Added to cart");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
