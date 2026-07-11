import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import { ProductContext } from "../context/ProductStoreContext";
import SelectLimit from "./SelectLimit";
import SelectOrder from "./SelectOrder";

export default function Herosection() {
  const [limit, setLimit] = useState(localStorage.getItem("searchLimit") || 4);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { setProduct, products } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setLoading(true);
    try {
      // let res = await axios.get(`http://localhost:8000/api/search?q=${search}&limit=${limit}`);
      let res = await axios.get(
        `http://Helmy.pythonanywhere.com/api/search?q=${search}&limit=${limit}`,
      );
      setProduct(res.data);
      setSearch("");
    } catch (err) {
      console.log("Error in fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 h-80 bg-gray-200">
          <h1 className="text-3xl text-center font-bold">
            Search for any product in minute
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center shadow-2xl rounded-2xl w-2/3 md:w-1/2"
          >
            <button className="btn rounded mt-1">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search for any product"
              className="outline-none py-2 px-5  border-gray-50 rounded-l-lg w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="flex justify-between items-center gap-2 mb-6 w-2/3 md:w-1/2">
            <SelectLimit limit={limit} setLimit={setLimit} />
            <SelectOrder />
          </div>
        </div>
      )}
    </>
  );
}
