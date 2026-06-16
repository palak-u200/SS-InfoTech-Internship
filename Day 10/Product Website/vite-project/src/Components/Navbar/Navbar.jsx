import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link className="logo" to="/" onClick={closeMenu}>
        <span>Tech</span>Luxe
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle menu"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        <NavLink to="/wishlist" onClick={closeMenu}>Wishlist <b>{wishlistCount}</b></NavLink>
        <NavLink to="/orders" onClick={closeMenu}>Orders</NavLink>
        <NavLink to="/cart" onClick={closeMenu}>Cart <b>{cartCount}</b></NavLink>
        {user ? (
          <>
            <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>
            <button className="nav-action" type="button" onClick={() => { logout(); closeMenu(); }}>
              Logout
            </button>
          </>
        ) : (
          <NavLink className="nav-action" to="/login" onClick={closeMenu}>Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
