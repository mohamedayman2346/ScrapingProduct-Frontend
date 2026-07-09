import React, { useContext } from "react";
import { ProductContext } from "../context/ProductStoreContext";

export default function SelectOrder() {
 const { sortedBy, setSortedBy } = useContext(ProductContext);
  return (
    <div>
      <label htmlFor="limit">Order By: </label>
      <select
        value={sortedBy}
        id="limit"
        onChange={(e) => {
          setSortedBy(e.target.value);
        }}
        className="border border-slate-200 rounded-lg p-2 text-sm bg-white shadow-sm"
      >
        <option value={""}>Default</option>
        <option value={'price-low'}>price: low to high</option>
        <option value={'price-high'}>price: High to low</option>
        <option value={'rating-high'}>Top Rating</option>
      </select>
    </div>
  );
}
