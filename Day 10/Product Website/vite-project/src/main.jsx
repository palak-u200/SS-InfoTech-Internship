import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import AuthProvider from "./Context/AuthContext";
import CartProvider from "./Context/CartContext";
import WishlistProvider from "./Context/WishlistContext";
import OrderProvider from "./Context/OrderContext";
import ToastProvider from "./Context/ToastContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <CartProvider>
        <WishlistProvider>
          <OrderProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </OrderProvider>
        </WishlistProvider>
      </CartProvider>

    </AuthProvider>

  </React.StrictMode>

);
