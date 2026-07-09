import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Wishlist() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

  const handleRemoveItem = (title) => {
    setProduct((curritem) => curritem.filter((item) => item.title !== title))
  }

  return (
    <div>
      <Navbar />
      {/* title */}
      <div className="text-center h-60  bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-3">
          WishList Product
        </h1>
        <div className="founded-full w-24 h-1 bg-slate-500"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-5">
        {products?.map((product, i) => (
          <Card key={i} product={product} onRemove={handleRemoveItem} />
        ))}
      </div>
    </div>
  );
}
