import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, cartTotal, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <section className="content-section page-transition">
      <div className="section-heading">
        <p className="eyebrow">Your selection</p>
        <h1>Shopping Cart</h1>
      </div>

      {!cart.length ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/products" className="gold-button">Shop Electronics</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-control">
                    <button type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className="ghost-button" type="button" onClick={() => removeItem(item.id)}>Remove</button>
              </article>
            ))}
          </div>
          <aside className="summary-panel">
            <h2>Order Summary</h2>
            <p>Subtotal <span>${cartTotal.toFixed(2)}</span></p>
            <p>Shipping <span>Free</span></p>
            <strong>Total <span>${cartTotal.toFixed(2)}</span></strong>
            <Link to="/checkout" className="gold-button">Checkout</Link>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
