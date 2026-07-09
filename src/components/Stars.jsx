import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function Stars({ rating }) {

  const rate = rating ? parseFloat(String(rating).split("\n")[0]) : 0;
  const fullStar = Math.floor(rate);
  const semiStar = rate % 1 >= 0.4 ? 1 : 0;

  return (
    <>
    { rate != 0 ? 
      <div className="flex items-center gap-2">
      {[...Array(fullStar)].map((_, i) => (
        <FaStar key={`full-${i}`} fill="gold" />
      ))}
      {semiStar > 0 && <FaStarHalfAlt fill="gold" />}
      {[...Array(5 - semiStar - fullStar)].map((_, i) => (
        <CiStar key={`empty-${i}`} />
      ))}
      </div> :
      <p>No Rating</p>
    }
    </>
  );
}
