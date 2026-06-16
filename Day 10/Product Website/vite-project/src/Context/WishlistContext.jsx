import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WISHLIST_KEY = "techluxe_wishlist";
export const WishlistContext = createContext(null);

const safeWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch {
    return [];
  }
};

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(safeWishlist);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  const addToWishlist = (product) => {
    setWishlist((items) =>
      items.some((item) => item.id === product.id) ? items : [...items, product]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlist((items) => items.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
      return false;
    }

    addToWishlist(product);
    return true;
  };

  const value = useMemo(
    () => ({
      wishlist,
      wishlistCount: wishlist.length,
      isWishlisted,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
    }),
    [wishlist]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
