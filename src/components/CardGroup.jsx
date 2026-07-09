import React, { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../context/ProductStoreContext";

export default function CardGroup() {
  const { sortedProducts } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-5">
      {sortedProducts?.map((product, i) => (
        <Card
          key={i}
          product = {product}
        />
      ))}
    </div>
  );
}

// {title: 'Apple iPhone 17 Pro Max (256 GB) - Deep Blue with Face ID | Tax Paid | 2 Years Official Warranty', price: '98,900', link: 'https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-25…&keywords=iphone+17+pro+max&qid=1783413116&sr=8-1', image: 'https://m.media-amazon.com/images/I/61bjBijQIXL._AC_UL320_.jpg', rating: 'Options:\n2 sizes'}
