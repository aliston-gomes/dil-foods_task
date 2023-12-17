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
        <article className="w-[98%] grid grid-cols-2 md:grid md:grid-cols-4 md:gap-4 justify-items-center lg:grid lg:grid-cols-4 lg:gap-4 xl:grid-cols-7">
          {product.length > 1 &&
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
                    }}
                  />
                </React.Fragment>
              );
            })}
        </article>
      </section>
    </div>
  );
};

export default ProductListing;
