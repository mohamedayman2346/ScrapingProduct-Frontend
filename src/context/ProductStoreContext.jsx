import React, { createContext, useState } from "react";

export const ProductContext = createContext([]);

export default function ProductStoreContext({ children }) {
  const [products, setProduct] = useState([]);
  const [sortedBy, setSortedBy] = useState("");

  const cleanPrice = (price) => {
    if (!price) return 0;
    const cleaned = String(price).replace(/[^\d.]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const cleanRating = (rating) => {
    if (!rating) return 0;
    const parts = String(rating).split("\n");
    return parseFloat(parts[0]) || 0;
  };

  const getSortedProducts = () => {
    let dataToSorted = Array.isArray(products)
      ? products
      : products && Array.isArray(products.data)
        ? products.data
        : [];
    let sorted = [...dataToSorted];
    if (sortedBy === "price-low") {
      sorted.sort(
        (a, b) => cleanPrice(a.price || 0) - cleanPrice(b.price || 0),
      );
    } else if (sortedBy === "price-high") {
      sorted.sort(
        (a, b) => cleanPrice(b.price || 0) - cleanPrice(a.price || 0),
      );
    } else if (sortedBy === "rating-high") {
      sorted.sort((a, b) => cleanRating(b.rating) - cleanRating(a.rating));
    }
    return sorted;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProduct,
        sortedBy,
        setSortedBy,
        cleanRating,
        sortedProducts: getSortedProducts(),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
