"use client";
import AxiosInstance from "@/axiosInstance/AxiosInstance";
import {
  add_to_wishlist,
  removeFromWishlist,
  getApiProducts,
} from "@/lib/features/cartSclice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  addToWishlist,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

const ProductCard = props => {
  const dispatch = useAppDispatch();
  const productId = props.cardData.productId;
  const router = useRouter();
  const [isWishlisted, setWishlisted] = useState(false);
  useEffect(() => {
    dispatch(getApiProducts());
  }, [isWishlisted]);
  const postApiData = async () => {
    try {
      const response = await AxiosInstance.patch(`/products/${productId}/`, {
        in_Cart: true,
      });
      console.log(response, "hello");
    } catch (error) {
      console.log(error);
    }
  };
  const postApiData_ = async () => {
    try {
      const response = await AxiosInstance.patch(`/products/${productId}/`, {
        in_Cart: false,
      });
      console.log(response, "hello");
    } catch (error) {
      console.log(error);
    }
  };
  const addToWishlist = () => {
    setWishlisted(true);
  };

  const removeFromCart = async () => {
    setWishlisted(false);
  };

  return (
    <div className=" bg-[#efefef] w-44 md:w-60 lg:w-60 h-64 md:h-72 border rounded-lg">
      <div
        className="flex items-center justify-center p-2"
        onClick={() => {
          router.push(`/productDetails/${productId}`);
        }}
      >
        <img
          src={props.cardData.itemImage}
          alt=""
          className="h-24 md:h-28 lg:h-28 xl:h-28 cursor-pointer"
        />
      </div>
      <div
        className="font-sans font-bold p-1 md:p-2"
        onClick={() => {
          router.push(`/productDetails/${productId}`);
        }}
      >
        {props.cardData.itemName.slice(0, 14)}
      </div>
      <div className="p-1 md:p-2">
        {props.cardData.itemRating.rate >= 1.1 &&
        props.cardData.itemRating.rate <= 1.9 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStarHalf style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate === 1 ? (
          <FaStar style={{ color: "#FFB000" }} />
        ) : props.cardData.itemRating.rate < 1 ? (
          <FaStarHalf style={{ color: "#FFB000" }} />
        ) : props.cardData.itemRating.rate >= 2.1 &&
          props.cardData.itemRating.rate <= 2.9 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStarHalf style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate === 2 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate === 3 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate >= 3 &&
          props.cardData.itemRating.rate <= 3.9 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStarHalf style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate === 4 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
          </small>
        ) : props.cardData.itemRating.rate >= 4 &&
          props.cardData.itemRating.rate <= 5 ? (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStarHalf style={{ color: "#FFB000" }} />
          </small>
        ) : (
          <small className="flex">
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
            <FaStar style={{ color: "#FFB000" }} />
          </small>
        )}
      </div>
      <div className="p-0 pl-1 md:pl-2 text-sm">
        {window.screen.availWidth > 1000
          ? props.cardData.itemDescription.slice(0, 25) + "..."
          : props.cardData.itemDescription.slice(0, 17) + "..."}
      </div>
      <div className="text-zinc-800 font-semibold pt-1 pl-2">
        {props.cardData.itemPrice}
      </div>

      <div className="flex items-center justify-end pr-4">
        {isWishlisted === true ? (
          <FaHeart
            onClick={() => {
              dispatch(removeFromWishlist(props.cardData.item_));
              removeFromCart();
              postApiData_();
            }}
            style={{ color: "#E64848", fontSize: "20px",cursor:"pointer" }}
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              dispatch(add_to_wishlist(props.cardData.item_));
              addToWishlist();
              postApiData();
            }}
            style={{ color: "#E64848", fontSize: "20px",cursor:"pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
