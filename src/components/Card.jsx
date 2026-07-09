import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Stars from "./Stars";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { ProductContext } from "../context/ProductStoreContext";

export default function Card({ product, onRemove }) {
  const [inWishlist, setInWishlist] = useState(product.wishlist) || false;
  const {cleanRating} = useContext(ProductContext);

  useEffect(() => {
    const currProduct = JSON.parse(localStorage.getItem('wishlist')) || []
    const isExist = currProduct.some((item) => item.title === product.title)
    setInWishlist(isExist)
  }, [product.title])
  // ميه ريداتير خضراء
  const addToWishList = () => {
    const savedWishlist = localStorage.getItem("wishlist");
    let currentProducts = savedWishlist ? JSON.parse(savedWishlist) : [];
    const isExist = currentProducts.some(
      (item) => item.title === product.title,
    );
    if (isExist) {
      currentProducts = currentProducts.filter(
        (item) => item.title !== product.title,
      );
      product["wishlist"] = false;
      setInWishlist(false);
      if(onRemove)
        onRemove(product.title)
    } else {
      product["wishlist"] = true;
      setInWishlist(true);
      currentProducts.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(currentProducts));
  };

  return (
    <div className="shadow-2xl relative flex flex-col justify-between h-full p-2 space-y-5 border border-amber-50">
      <button
        onClick={addToWishList}
        title="add to WishList"
        className={`wishlist  absolute top-10 right-10 bg-slate-50 hover:bg-slate-100 transition-colors rounded-full cursor-pointer`}
      >
        <CiHeart
          size={24}
          className={`${inWishlist ? "text-white bg-red-700" : "text-slate-700"} rounded-full`}
        />
      </button>
      <div className="image place-items-center">
        <img
          src={product.image}
          alt={product.title.slice(10)}
          className="rounded"
        />
      </div>
      <div className="contant space-y-1 ">
        <h3 className="font-bold line-clamp-2">{product.title}</h3>
        <div className="rating-star">
          <span> {cleanRating(product.rating )!= 0 ? product.rating : ""}</span>
          <Stars rating={cleanRating(product.rating)} />
        </div>
        <h5 className="font-semibold">{product.price} EGP</h5>
      </div>
      <Link
        to={product.link}
        className="btn flex items-center justify-around"
        target="_blank"
      >
        <h5>Display on Amazon</h5>
        <MdOutlineShoppingCart />
      </Link>
    </div>
  );
}
