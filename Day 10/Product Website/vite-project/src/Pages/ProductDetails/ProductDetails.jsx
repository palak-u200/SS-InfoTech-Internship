import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useCart } from "../../Context/CartContext";
import { useToast } from "../../Context/ToastContext";
import { useWishlist } from "../../Context/WishlistContext";
import { fetchElectronicsProducts, fetchProductById } from "../../utils/productsApi";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { notify } = useToast();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchProductById(id), fetchElectronicsProducts()])
      .then(([item, all]) => {
        setProduct(item);
        setProducts(all);
        setActiveImage(item.thumbnail);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const related = useMemo(
    () => products.filter((item) => item.category === product?.category && item.id !== product.id).slice(0, 4),
    [products, product]
  );

  if (loading) return <Loading />;
  if (error) return <p className="empty-state">{error}</p>;

  return (
    <section className="content-section page-transition">
      <div className="details-layout">
        <div className="details-gallery">
          <img className="main-product-image" src={activeImage} alt={product.title} />
          <div className="thumbnail-row">
            {product.images.map((image) => (
              <button key={image} type="button" onClick={() => setActiveImage(image)}>
                <img src={image} alt={product.title} />
              </button>
            ))}
          </div>
        </div>
        <div className="details-copy">
          <p className="eyebrow">{product.brand || product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="detail-stats">
            <span>★ {product.rating}</span>
            <span>{product.stock} in stock</span>
            <span>{product.category}</span>
          </div>
          <h2>${product.price}</h2>
          <div className="details-actions">
            <button className="gold-button" type="button" onClick={() => { addToCart(product); notify("Added to cart"); }}>
              Add To Cart
            </button>
            <button className="ghost-button" type="button" onClick={() => { const added = toggleWishlist(product); notify(added ? "Added to wishlist" : "Removed from wishlist", "info"); }}>
              {isWishlisted(product.id) ? "Wishlisted" : "Add To Wishlist"}
            </button>
            <button className="dark-button" type="button" onClick={() => { addToCart(product); navigate("/checkout"); }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="section-heading">
        <p className="eyebrow">Related</p>
        <h2>More in this category</h2>
      </div>
      <div className="products-grid">
        {related.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
      <Link to="/products" className="ghost-button back-link">Back to products</Link>
    </section>
  );
}

export default ProductDetails;
