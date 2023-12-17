import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <section className="h-14 md:h-20 lg:h-20 bg-[#E64848] flex items-center justify-center w-full ">
        <article className="flex items-center justify-between w-[90%]  h-14 sm:h-32 md:h-20 lg:h-20">
          <Link href="/">Brand Logo</Link>
          <Link href="productDetails/2">Sign In</Link>
        </article>
      </section>
    </div>
  );
};

export default NavBar;
