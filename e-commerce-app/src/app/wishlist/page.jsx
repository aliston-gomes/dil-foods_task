"use client";
import { useAppSelector } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  FaStar,
} from "react-icons/fa";
import {
  removeFromWishlist,addToCart
} from "@/lib/features/cartSclice";
import { BsBagHeartFill } from "react-icons/bs";
const wishList = () => {
  const wishlist_Data = useAppSelector(state => {
    return state.wishList;
  });
  const [toggle,setToggle]=useState(false)
  useEffect(()=>{},[toggle])
  const dispatch=useAppDispatch()
  console.log(wishlist_Data, "wishlist_Data");
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {wishlist_Data.length > 0 ? (
          wishlist_Data.map((item, index) => {
            return (
              <article
                className="h-32 flex items-center gap-4 bg-[#efefef]"
                key={item.id}
              >
                <section className="basis-1/3 flex items-center justify-center">
                  <img src={item.image} className="h-16 " />
                </section>
                <section>
                  <div>{item.title.slice(0, 20)}</div>
                  <div className="flex items-center justify-center">
                    <FaStar style={{ color: "#FFB000" }} />
                    <span></span>
                    {item.rating.rate}
                  </div>
                  <div>{item.price}</div>
                </section>
                <article className="flex gap-2">
                  <button
                    className="p-1 border-2 border-zinc-100  rounded-md hover:bg-[#ffff] hover:text-[#E64848] bg-[#E64848] text-[#ffff] hover:border-neutral-200 "
                    onClick={() => {
                      dispatch(removeFromWishlist(item));
                      setToggle(prev => !prev);
                    }}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="p-1 border-2 border-neutral-200 rounded-md hover:bg-[#E64848] hover:text-[#ffff] bg-[#ffff] text-[#E64848] hover:border-[#efefef] "
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    Add to Cart
                  </button>
                </article>
              </article>
            );
          })
        ) : (
          <section className="h-32 flex items-center gap-4 justify-center w-[100%]">
            <h1 className="font-bold text-xl">your wishlist looks empty !</h1>
            
          </section>
        )}
      </section>
    </>
  );
};

export default wishList;
