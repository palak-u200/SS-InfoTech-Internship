import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ORDERS_KEY = "techluxe_orders";
const statuses = ["Processing", "Shipped", "Delivered"];

export const OrderContext = createContext(null);

const safeOrders = () => {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch {
    return [];
  }
};

function OrderProvider({ children }) {
  const [orders, setOrders] = useState(safeOrders);

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const placeOrder = ({ items, total, shipping }) => {
    const order = {
      id: `TLX-${Date.now()}`,
      items,
      total,
      shipping,
      status: statuses[orders.length % statuses.length],
      createdAt: new Date().toISOString(),
    };

    setOrders((current) => [order, ...current]);
    return order;
  };

  const value = useMemo(() => ({ orders, placeOrder }), [orders]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export const useOrders = () => useContext(OrderContext);

export default OrderProvider;
