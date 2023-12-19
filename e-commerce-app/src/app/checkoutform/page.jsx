"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
const CheckOutDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    email: "",
    secondaryPhone: "",
    paymentMethod: "",
    upi_id:""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(formData.name=="" ||formData.address =="" ||formData.pincode==""||formData.email==""||formData.phone==""||formData.paymentMethod==""){
toast.warn("All fields are mandatory", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
        
    }else if(formData.paymentMethod=="upi" && formData.upi_id==""){
toast.warn("Enter UPI ID", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        });
        }else{
        window.location.assign("/checkout")
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-8">
        
      <form
        className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="pb-3 pt-1 text-xl font-bold text-neutral-500">CheckOut Form</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600 font-medium">
            Address*
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pincode" className="block text-gray-600 font-medium">
            Pincode*
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600 font-medium">
            Phone Number*
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="secondaryPhone"
            className="block text-gray-600 font-medium"
          >
            Secondary Phone Number
          </label>
          <input
            type="number"
            id="secondaryPhone"
            name="secondaryPhone"
            value={formData.secondaryPhone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-gray-600 font-medium"
          >
            Payment Method*
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">UPI</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">COD</span>
            </label>
          </div>
        </div>
        {
            formData.paymentMethod === "upi"&&
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            UPI ID*
          </label>
          <input
            type="text"
            id="upi_id"
            name="upi_id"
            value={formData.upi_id}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        }
        <button
          type="submit"
          className="bg-[#E64848] text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckOutDetails;
