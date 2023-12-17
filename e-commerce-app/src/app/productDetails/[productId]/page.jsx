"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AxiosInstance from "@/axiosInstance/AxiosInstance";
import {
  FaRegHeart,
  FaHeart,
  addToWishlist,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

const ProductDetails = ({ params }) => {
  const [product, SetProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await AxiosInstance.get(
          `/products/${params.productId}`
        );
        SetProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  console.log(product, "RESPONSE");
  return (
    <div className="p-10">
      <section className="h-60 md:h-80 lg:h-96 md:flex lg:flex md:items-center">
        <article className="flex items-center justify-center p-4 md:basis-1/2 lg:basis-1/4 bg-[#efefef]">
          <img src={product.image} className="h-60 md:h-80 lg:h-96" />
        </article>
        <section>
          <h1 className="font-bold pl-3 text-lg">{product.title}</h1>
          <article className="pl-3 text-sm text-gray-500">
            <p>
              {product?.description?.length > 100
                ? product?.description.slice(0, 100)
                : product?.description}
            </p>
          </article>
          <article className="p-3 flex">
            {product.rating?.rate >= 1.1 && product.rating?.rate <= 1.9 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStarHalf style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate === 1 ? (
              <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
            ) : product.rating?.rate < 1 ? (
              <FaStarHalf style={{ color: "#FFB000", fontSize: "20px" }} />
            ) : product.rating?.rate >= 2.1 && product.rating?.rate <= 2.9 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStarHalf style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate === 2 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate === 3 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate >= 3 && product.rating?.rate <= 3.9 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStarHalf style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate === 4 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : product.rating?.rate >= 4 && product.rating?.rate <= 5 ? (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStarHalf style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            ) : (
              <small className="flex">
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
                <FaStar style={{ color: "#FFB000", fontSize: "20px" }} />
              </small>
            )}
            <span className="text-gray-500">{product.rating?.count}</span>
          </article>
          <article className="font-bold pl-3">MRP ₹{product.price}</article>
          <article className="flex items-center gap-9 p-3">
            <button
              type="button"
              className="p-2 bg-[#E64848] border rounded-md hover:bg-[#efefef] hover:text-[#E64848] active:bg-[#efefef] active:text-[#E64848]"
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="p-2 borde rounded-md border-2 hover:border-[#E64848]"
            >
              Add to Wishlist
            </button>
          </article>
        </section>
      </section>
    </div>
  );
};

export default ProductDetails;
