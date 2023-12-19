import Link from "next/link";
import React from "react";
import { BsBagHeartFill,BsFillCartFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div>
      <section className="h-14 md:h-16 lg:h-16 bg-[#E64848] flex items-center justify-center w-full ">
        <article className="flex items-center justify-between w-[90%]  h-14 sm:h-32 md:h-20 lg:h-20">
          <Link href="/" className="text-lg font-bold text-white">
            E-Com
          </Link>
          <div className="flex md:gap-4 gap-6 lg:gap-10">
            <Link href="/wishlist">
              <BsBagHeartFill className="md:text-2xl lg:text-2xl text-xl text-white" />
            </Link>
            <Link href="/cart">
              <BsFillCartFill className="md:text-2xl lg:text-2xl text-xl text-white " />
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default NavBar;
