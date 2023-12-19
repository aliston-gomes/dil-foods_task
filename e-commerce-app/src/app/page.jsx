"use client";
import AxiosInstance from "@/axiosInstance/AxiosInstance";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/page";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch, useAppStore } from "../lib/hooks";
import { addToCart, getApiProducts } from "@/lib/features/cartSclice";
import Loader from './loader/Loader';
const ProductListing = () => {
  const data = useAppSelector(state => {
    return state.wishList;
  });
  const dispatch = useAppDispatch();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getApiProducts());
    const getApiData = async () => {
      try {
        const response = await AxiosInstance.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, [data.length]);
  console.log(product);
  return (
    <div>
      <section className=" h-96 flex justify-center pt-2">
        <article className="w-[98%] grid grid-cols-2 md:grid gap-4 md:grid-cols-4 md:gap-4 justify-items-center lg:grid lg:grid-cols-4 lg:gap-4 xl:grid-cols-7">
          {product.length > 1?
            product.map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <ProductCard
                    cardData={{
                      itemName: item.title,
                      itemRating: item.rating,
                      itemDescription: item.description,
                      itemPrice: item.price,
                      itemImage: item.image,
                      productId: item.id,
                      product_incart: item.in_Cart,
                      item_:item
                    }}
                  />
                </React.Fragment>
              );
            }) :
            <section className="flex items-center justify-center text-lg font-bold">
              <Loader/></section>}
        </article>
      </section>
    </div>
  );
};

export default ProductListing;
