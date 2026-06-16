import { Link } from "react-router-dom";
import { useOrders } from "../../Context/OrderContext";
import "./Orders.css";

function Orders() {
  const { orders } = useOrders();

  return (
    <section className="content-section page-transition">
      <div className="section-heading">
        <p className="eyebrow">Purchase history</p>
        <h1>Orders</h1>
      </div>

      {orders.length ? (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div>
                <p className="eyebrow">{order.id}</p>
                <h3>{order.items.map((item) => item.title).join(", ")}</h3>
                <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <strong>${order.total.toFixed(2)}</strong>
                <span className={`status-pill ${order.status.toLowerCase()}`}>{order.status}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No orders yet.</p>
          <Link to="/products" className="gold-button">Start Shopping</Link>
        </div>
      )}
    </section>
  );
}

export default Orders;
