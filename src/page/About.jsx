import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.jpg";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <div>
      <Navbar />
      {/* title */}
      <div className="text-center h-60  bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-3">
          About The Project
        </h1>
        <div className="founded-full w-24 h-1 bg-slate-500"></div>
      </div>
      <main className="my-20 relative ">
        {/* body */}
        <section className="mt-20 space-y-10">
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 items-center ">
            {/* first */}
            <div className="space-y-5 order-2 md:order-1!">
              <h2 className="text-2xl font-semibold">Steps to Use</h2>
              <div className="step-1">
                <span className="num">1</span>
                <p>Write the Product name accurately.</p>
              </div>
              <div className="step-2">
                <span className="num">2</span>
                <p>Wait a moment for real-time data collection.</p>
              </div>
              <div className="step-3">
                <span className="num">3</span>
                <p> Browser the product and click 'View on Amazon'.</p>
              </div>
            </div>

            {/* second */}
            <div className="about-app items-center w-fit  grid grid-cols-1 sm:grid-cols-2 p-3 justify-items-center border border-blue-500 border-r-8 bg-blue-100 rounded-2xl order-1 md:order-2">
              <div className="content space-y-5">
                <h2 className="text-2xl font-semibold">
                  What is this Application?
                </h2>

                <p>
                  A real-time search engine that fetches dynamic product data
                  directly from Amazon without pre-storing. it provides
                  upp-to-date information, price, and reviews
                </p>
              </div>
              <div className="logo w-fit">
                <img
                  src={logo}
                  alt="helmy-logo"
                  className="rounded-full h-30"
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 pb-10 md:grid-cols-2 px-5 gap-5 items-center ">
            {/* first */}
            <div className="space-y-5 order-1 md:order-2">
              <h2 className="text-2xl font-semibold">Usage Steps</h2>
              <div className="step-1">
                <span className="num">1</span>
                <p>Identity the product model precisely.</p>
              </div>
              <div className="step-2">
                <span className="num">2</span>
                <p>Live data aggregation in performed.</p>
              </div>
              <div className="step-3">
                <span className="num">3</span>
                <p> Analyze product comparisons and click 'view'.</p>
              </div>
            </div>

            {/* second */}
            <div className="space-y-7">
              <h2 className="text-2xl font-semibold">Crucial Warning!</h2>
              <div className="bg-amber-100 p-3 space-y-2 border border-yellow-400 border-r-8 rounded">
                <p className="text-amber-500 flex items-center gap-5">
                  Please do Not close the automatic browser window{" "}
                  <span>
                    <CiWarning size={30} />{" "}
                  </span>
                </p>
                <p>
                  Closing this window will cause an immediate data collection
                  failure.
                </p>
              </div>
              <Link to="/" className="btn w-fit">
                Back to Search
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
