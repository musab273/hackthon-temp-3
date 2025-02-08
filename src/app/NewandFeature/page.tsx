"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const FilterSort = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);


  const products = [
    {id: 1, name: "Nike Air Force 1 Mid '07", image: "/Rectangle (30).png", price: "MRP : ₹ 10 795.00", category: "Men's Shoes", details: "1 Colour",},
    {id: 2, name: "Nike Court Vision Low Next Nature", image: "/Rectangle.png", price: "MRP : ₹ 4 995.00", category: "Men's Shoes", details: "1 Colour",},
    {id: 3,name: "Nike Air Force 1 PLT.AF.ORM",image: "/Rectangle (1).png",price: "MRP : ₹ 8 695.00",category: "Women's Shoes",details: "1 Colour",},
    {id: 4,name: "Nike Air Force 1 React",image: "/Rectangle (4).png",price: "MRP : ₹ 13 295.00",category: "Men's Shoes",details: "1 colour",},
    {id: 5,name: "Air Jordan 1 Elevate Low",image: "/Rectangle (3).png",price: "MRP : ₹ 11 895.00",category: "Women's Shoes",details: "1 Colour",},
    {id: 6,name: "Nike Standard Issue",image: "/Rectangle (2).png",price: "MRP : ₹ 2 895.00",category: "Women's Basketball Jersey",details: "1 Colour",},
    {id: 7,name: "Nike Dunk Low Retro SE",image: "/Rectangle (7).png",price: "MRP : ₹ 9 695.00",category: "Men's Shoes",details: "1 Colour",},
    {id: 8,name: "Nike Dri-FIT UV Hyverse",image: "/Rectangle (6).png ",price: "",category: "Men's Short-Sleeve Graphic Fitness Top",details: "1 Colour",},
    {id: 9,name: "Nike Court Vision Low",image: "/Rectangle (5).png",price: "MRP : ₹ 5 695.00",category: "Men's Shoes",details: "1 Colour",},
    {id: 10,name: "Nike Dri-FIT Ready",image: "/Rectangle (10).png",price: "MRP : ₹ 2 495.00",category: "Men's Short-Sleeve Fitness Top",details: "3 Colours",},
    {id: 11,name: "Nike One Leak Protection: Period",image: "/Rectangle (9).png",price: "MRP : ₹ 3 395.00",category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",details: "2 Colours",},
    {id: 12,name: "Nike Air Force 1 LV8 3",image: "/Rectangle (8).png",price: "MRP : ₹ 7 495.00",category: "Older Kids' Shoe",details: "1 Colour",},
    {id: 13,name: "Nike Blazer Low Platform",image: "/Rectangle (13).png",price: "MRP : ₹ 8 195.00",category: "Women's Shoes",details: "1 Colour",},
    {id: 14,name: "Nike Air Force 1 '07",image: "/Rectangle (12).png",price: "MRP : ₹ 8 195.00",category: "Women's Shoe",details: "2 Colours",},
    {id: 15,name: "Nike Pro Dri-FIT",image: "/Rectangle (11).png",price: "MRP : ₹ 1 495.00",category: "Men's Tight-Fit Sleeveless Top",details: "1 Colour",},
    {id: 16,name: "Nike Dunk Low Retro",image: "/Rectangle (16).png",price: "MRP : ₹ 8 695.00",category: "Men's Shoes",details: "1 Colour",},
    {id: 17,name: "Nike Air Max SC",image: "/Rectangle (15).png",price: "MRP : ₹ 5 995.00",category: "Women's Shoes",details: "2 Colours",},
    {id: 18,name: "Nike Dri-FIT UV Miler",image: "/Rectangle (14).png",price: "MRP : ₹ 1 695.00",category: "Men's Short-Sleeve Running Top",details: "1 Colour",},
    {id: 19,name: "Nike Air Max SYSTM",image: "/Rectangle (19).png",price: "MRP : ₹ 6 495.00",category: "Older Kids' Shoes",details: "1 Colour",},
    {id: 20,name: "Nike Alate All U",image: "/Rectangle (18).png",price: "MRP : ₹ 2 195.00",category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",details: "1 Colour",},
    {id: 21,name: "Nike Court Legacy Lift",image: "/Rectangle (17).png",price: "MRP : ₹ 7 495.00",category: "Women's Shoes",details: "2 Colours",},
    {id: 22,name: "Nike Swoosh",image: "/Rectangle (22).png",price: "MRP : ₹ 3 095.00",category: "Women's Medium-support Padded Sports Bra Tank",details: "2 Colours",},
    {id: 23,name: "Nike SB Zoom Janoski OG+",image: "/Rectangle (21).png",price: "MRP : ₹ 8 595.00",category: "Shoes",details: "1 Colour",},
    {id: 24,name: "Nike Dri-FIT Run Division Rise 365",image: "/Rectangle (20).png",price: "MRP : ₹ 3 495.00",category: "Men's Running Tank",details: "2 Colours",},
    {id: 25,name: "Nike Dri-FIT Challenger",image: "/Rectangle (25).png",price: "MRP : ₹ 2 495.00",category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",details: "1 Colour",},
    {id: 26,name: "Jordan Series ES",image: "/Rectangle (24).png",price: "MRP : ₹ 7 495.00",category: "Men's Shoes",details: "2 Colours",},
    {id: 27,name: "Nike Outdoor Play",image: "/Rectangle (23).png",price: "MRP : ₹ 3 895.00",category: "Older Kids' Oversized Woven Jacket",details: "1 Colour",},
    {id: 28,name: "Nike Sportswear Trend",image: "/Rectangle (27).png",price: "MRP : ₹ 2 495.00",category: "Older Kids' (Girls') High-waisted Woven Shorts",details: "2 Colours",},
    {id: 29,name: "Nike Blazer Low '77 Jumbo",image: "/Rectangle (29).png",price: "MRP : ₹ 8 595.00",category: "Women's Shoes",details: "1 Colour",},
    {id: 30,name: "Nike SB Force 58",image: "/Rectangle (26).png",price: "MRP : ₹ 5 995.00",category: "Skate Shoe",details: "1 Colour",},




    // Add more products as needed
  ];

  // New 500 list colum

  const categories = ["shoes", "Sports Bras", "Accessories", "Trousers & Tights", "Hoodies & Sweatshirts", "Jackets", "  Shorts",
    "Tracksuits", "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment", "T-shirts", "Sleepers", "Skachers", "Baby Sports Shoes",
  ];

  // Gender 

  const Gender = ["Male", "Female", "UniSex"];


  // Kids 

  const Kids = ["Boys", "Girls"];

  // Shop By Store 

  const ShopbyStore = ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"]

  //Related Categories





  return (
    <div className="px-4 py-2 bg-white">
      <Link href={"/products"}></Link>
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
        <div className="text-lg font-semibold">New (500)</div>

        <div className="flex items-center space-x-4">
          <button
            className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
            {filtersVisible ? "Hide Filters" : "Show Filters"}
            <ChevronDown className={`ml-1 transform ${filtersVisible ? "rotate-180" : "rotate-0"}`} size={18} />
          </button>

          <div className="relative">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none">
              Sort By
              <ChevronDown className="ml-1" size={18} />
            </button>
            {/* Dropdown placeholder, expand this if needed */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        {/* Column for Categories */}
        <div>
          <div className="col-span-1 border rounded-lg p-4 shadow-md ">
            <h2 className="text-lg font-semibold mb-4 underline under">Categories</h2>

            <ul className="space-y-2 overflow-y-auto
      [&::-webkit-scrollbar]:w-1 h-60
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {categories.map((category, index) => (
                <li key={index} className="text-gray-700 hover:underline cursor-pointer">{category}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 border rounded-lg p-4 shadow-md ">

            <div >
              <h1 className="text-lg font-semibold mb-4 mt-3 p-2">Gender</h1>
              <ul>
                {Gender.map((Gender, index) => (
                  <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                    <input
                      type="radio" name="option" value={0}
                      className=" w-4 h-4 items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    {Gender}
                  </li>
                ))}
              </ul>
            </div>

            <div>

              <div >
                <h1 className="text-lg font-semibold mb-4 mt-3 p-2">Kids</h1>
                <ul>
                  {Kids.map((Kids, index) => (
                    <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                      <input
                        type="radio" name="option"
                        className=" w-4 h-4  items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      {Kids}
                    </li>
                  ))}
                </ul>
              </div>

              <div >
                <div>
                  <h1 className="text-lg font-semibold mb-4 mt-3 p-2">Shop By Price</h1>
                  <ul>
                    {ShopbyStore.map((ShopbyStore, index) => (
                      <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                        <input
                          type="radio" name="option"
                          className=" w-4 h-4  items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        {ShopbyStore}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>


            </div>
          </div>

        </div>

        {/* Grid for Images and Details */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((products) => (
            <div key={products.id} className="border rounded-lg p-4 shadow-md flex flex-col items-center">
             <Link href={"/id3"}> <img src={products.image} alt={products.name} className="w-full h-52 object-fill rounded-md" /></Link>
              <div className="flex flex-col items-start w-full mt-2">
                <h2 className="text-lg font-semibold">{products.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{products.category}</p>
                <p className="text-gray-600 text-sm mt-1">{products.details}</p>
                <div className="mt-2 font-bold text-gray-800">{products.price}</div>
              </div>
              <Link href={"/AddtoCart"}><button className="mt-4 w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button></Link>

            </div>

          ))}

        </div>
      </div>
      <div>
        <div className="flex py-6 ml-96 ">
          <h1 className="font-bold text-2xl">Realtive Items</h1>
        </div>

        <div className="flex">

          <ul className="flex gap-2 ml-80 text-sm p-3 ">

            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">Best Selling Products</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">Best Shoes</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">New Basketball Shoes</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">New Football Shoes</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">New Men's Shoes</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">New Running Shoes</li>
            <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">Best Men's Shoes</li>

          </ul>

        </div>
      </div>

      <div className="flex">
        <ul className="flex gap-4 ml-80 p-3 pb-8">

          <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">New Jordan Shoes</li>
          <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">Best Women's Shoes</li>
          <li className="flex border rounded-full hover:bg-slate-400 px-2 py-4">Best Training & Gym</li>

        </ul>
      </div>

    </div>
  );
};

export default FilterSort;
