"use client";
import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  addToWishlist,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

const ProductCard = props => {
  const [isWishlisted, setWishlisted] = useState(false);
  const addToWishlist = () => {
    setWishlisted(prevState => !prevState);
  };
  return (
    <div className=" bg-[#efefef] w-44 md:w-60 lg:w-60 h-64 md:h-72 border rounded-lg">
      <div className="flex items-center justify-center p-2">
        <img
          src={props.cardData.itemImage}
          alt=""
          className="h-24 md:h-28 lg:h-28 xl:h-28"
        />
      </div>
      <div className="font-sans font-bold p-1 md:p-2">
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
      <div className="p-0 pl-1 md:pl-2">
        {props.cardData.itemDescription.slice(0, 20) + "..."}
      </div>
      <div className="text-zinc-800 font-semibold pt-1 pl-2">
        {props.cardData.itemPrice}
      </div>
      <div className="flex items-center justify-end pr-4">
        {isWishlisted === true ? (
          <FaHeart
            onClick={addToWishlist}
            style={{ color: "#E64848", fontSize: "20px" }}
          />
        ) : (
          <FaRegHeart
            onClick={addToWishlist}
            style={{ color: "#E64848", fontSize: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
