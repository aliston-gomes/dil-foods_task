import React from "react";

const NavBar = () => {
  return (
    <div>
      <section className="h-14 md:h-20 lg:h-20 bg-[#E64848] flex items-center justify-center w-full ">
        <article className="flex items-center justify-between w-[90%]  h-14 sm:h-32 md:h-20 lg:h-20">
          <div>Brand Logo</div>
          <div>Sign In</div>
        </article>
      </section>
    </div>
  );
};

export default NavBar;
