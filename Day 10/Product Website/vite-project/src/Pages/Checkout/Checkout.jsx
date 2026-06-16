import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useOrders } from "../../Context/OrderContext";
import { useToast } from "../../Context/ToastContext";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cart.length) {
      notify("Your cart is empty.", "error");
      return;
    }

    placeOrder({ items: cart, total: cartTotal, shipping });
    clearCart();
    notify("Order placed successfully");
    navigate("/orders");
  };

  if (!cart.length) {
    return (
      <section className="content-section page-transition">
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/products" className="gold-button">Shop before checkout</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="content-section page-transition">
      <div className="section-heading">
        <p className="eyebrow">Secure checkout</p>
        <h1>Shipping Details</h1>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input placeholder="Full Name" value={shipping.name} onChange={(event) => setShipping({ ...shipping, name: event.target.value })} required />
          <input placeholder="Contact Number" value={shipping.phone} onChange={(event) => setShipping({ ...shipping, phone: event.target.value })} required />
          <textarea placeholder="Shipping Address" value={shipping.address} onChange={(event) => setShipping({ ...shipping, address: event.target.value })} required />
          <input placeholder="City" value={shipping.city} onChange={(event) => setShipping({ ...shipping, city: event.target.value })} required />
          <input placeholder="Pincode" value={shipping.pincode} onChange={(event) => setShipping({ ...shipping, pincode: event.target.value })} required />
          <button className="gold-button" type="submit">Place Order</button>
        </form>
        <aside className="summary-panel">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <p key={item.id}>{item.title} x {item.quantity}<span>${(item.price * item.quantity).toFixed(2)}</span></p>
          ))}
          <strong>Total <span>${cartTotal.toFixed(2)}</span></strong>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
