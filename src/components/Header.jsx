import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className="w-screen h-20 bg-gray-900 ">
      <div className="flex  items-center w-2/4 h-20 justify-start p-3 ">
        <span className="text-2xl text-gray-100 font-semibold">ZULU</span>{" "}
        <span className="text-xl text-yellow-600">Shop</span>
        <span>
          <AiOutlineShoppingCart className="text-2xl text-red-600 font-bold" />
        </span>
      </div>
    </div>
  );
}

export default Header;
