"use client";
import AxiosInstance from "@/axiosInstance/AxiosInstance";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await AxiosInstance.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);
  console.log(product);
  return (
    <div>
      <section className=" h-96 flex justify-center pt-2">
        <article className="w-[98%] grid grid-rows-1 grid-flow-col gap-4 md:grid-rows-1 md:grid-flow-col md:gap-4 md:grid lg:grid-rows-1 lg:grid-flow-col lg:gap-4 lg:grid">
          {product.length > 1 &&
            product.map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <ProductCard />
                </React.Fragment>
              );
            })}
        </article>
      </section>
    </div>
  );
};

export default ProductListing;
