import React from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

function Countdown() {
  return (
    <div className="w-screen h-28 bg-yellow-400 p-1 ">
      <div className="text-3xl flex justify-end ">
        <AiOutlineClose />
      </div>
      <div className=" w-4/5 h-20 m-auto">
        <div className=" flex justify-between items-center">
          <h1 className="  text-purple-700 text-3xl text-center">
            christmas sale !
          </h1>
          <div className="w-60 p-2 h-16 bg-purple-700 flex justify-between items-center">
            <span className="flex flex-col items-center">
              <p className="text-xl text-white">00</p>
              <small className="bg-red-600 text-white p-1 rounded-md">
                Days
              </small>
            </span>
            <span className="flex flex-col items-center">
              <p className="text-xl text-white">00</p>
              <small className="bg-red-600 text-white p-1 rounded-md">
                Hours
              </small>
            </span>
            <span className="flex flex-col items-center">
              <p className="text-xl text-white">00</p>
              <small className="bg-red-600 text-white p-1 rounded-md">
                Minutes
              </small>
            </span>
            <span className="flex flex-col items-center">
              <p className="text-xl text-white">00</p>
              <small className="bg-red-600 text-white p-1 rounded-md">
                second
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
