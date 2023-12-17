"use client";
import React, { useState } from "react";
import { BsBagHeartFill } from "react-icons/bs";
const wishList = () => {
  const [products, setProducts] = useState([, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {products.map((item, index) => {
          return (
            <div className="bg-slate-500 h-48" key={index}>
              {item}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default wishList;
