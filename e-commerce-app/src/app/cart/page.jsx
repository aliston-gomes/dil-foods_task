"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  getCartTotal,
  getApiProducts,
  removeFromCart,
} from "@/lib/features/cartSclice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
const product_cart = () => {
  const [totalPrice, setTotalPrice] = React.useState(null);
  const get_total_price = () => {
    const calculatedTotalPrice = data.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    console.log(calculatedTotalPrice);
    setTotalPrice(calculatedTotalPrice);
  };
  const [toggle,setToggle]=React.useState(true)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getApiProducts());
    dispatch(getCartTotal());
    get_total_price();
    const calculatedTotalPrice = data.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    console.log(calculatedTotalPrice);
    setTotalPrice(calculatedTotalPrice);
  }, [toggle]);
  const data = useAppSelector(state => {
    return state.cartItems;
  });

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <article
                className="h-32 flex items-center gap-4 bg-[#efefef]"
                key={item.id}
              >
                <section className="basis-1/3 flex items-center justify-center">
                  <img src={item.image} className="h-16 " />
                </section>
                <section>
                  <div>{item.title.slice(0, 25)}</div>
                  <div>₹{item.price}</div>
                </section>
                <button
                  className="p-1 border rounded-md bg-[#E64848] text-[#fff] hover:bg-[#fff] hover:text-[#E64848] border-[#E64848]"
                  onClick={() => {
                    dispatch(removeFromCart(item));
                    get_total_price();
                    setToggle(prev => !prev);
                  }}
                >
                  Remove
                </button>
              </article>
            );
          })
        ) : (
            <section className="h-32 flex items-center gap-4 justify-center w-[100%]">
          <h1 className="font-bold text-xl">Oops! your cart is empty.</h1>
          </section>
        )}
      </section>
      {data.length > 0 &&<article className="h-28 p-2 border rounded-md ">
        <h1 className="text-lg p-3">
          Cart Total:<span className="font-bold pl-2">₹ {totalPrice}</span>
        </h1>
      <div className="p-3">
          <Link href="/checkoutform" className="p-2 border rounded-md bg-[#47A992]">
          Check Out
        </Link>
      </div>

      
      </article>}
      
    </>
  );
};

export default product_cart;
