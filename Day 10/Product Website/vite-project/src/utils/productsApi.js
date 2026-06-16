export const ELECTRONICS_CATEGORIES = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
];

const API_BASE = "https://dummyjson.com/products";

export const categoryLabel = (category) =>
  category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const fetchElectronicsProducts = async () => {
  const responses = await Promise.all(
    ELECTRONICS_CATEGORIES.map((category) =>
      fetch(`${API_BASE}/category/${category}`).then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load products.");
        }
        return res.json();
      })
    )
  );

  return responses.flatMap((response) => response.products || []);
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);

  if (!response.ok) {
    throw new Error("Product not found.");
  }

  const product = await response.json();

  if (!ELECTRONICS_CATEGORIES.includes(product.category)) {
    throw new Error("This product is not available in electronics.");
  }

  return product;
};
