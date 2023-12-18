"use client";
import { useAppSelector } from "@/lib/hooks";
import React, { useState } from "react";
import { BsBagHeartFill } from "react-icons/bs";
const wishList = () => {
  const [products, setProducts] = useState([, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const wishlist_Data = useAppSelector(state => {
    return state.cartItems;
  });
  console.log(wishlist_Data, "wishlist_Data");
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {wishlist_Data.length > 0 ? (
          wishlist_Data.map((item, index) => {
            return (
              <article className="h-32 flex items-center gap-4 bg-slate-500">
                <section className="basis-1/3 flex items-center justify-center">
                  <img src={item.image} className="h-16 " />
                </section>
                <section>
                  <div key={index}>{item.title.slice(0,25)}</div>
                  <div key={index}>{item.rating.rate}</div>
                  <div key={index}>{item.price}</div>
                </section>
              </article>
            );
          })
        ) : (
          <h1>Your Cart is empty</h1>
        )}
      </section>
    </>
  );
};

export default wishList;
