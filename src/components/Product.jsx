import React from "react";
import gown from "../assets/gown.jpg";
import gown1 from "../assets/gown1.jpg";
import Countdown from "./Countdown";
import DropDown from "./DropDown";
import Header from "./Header";

function Product() {
  return (
    <>
      <Header />
      <div className="w-screen h-fit ">
        <div className="w-screen h-96 flex  justify-center items-center">
          <div className="imgContainer mr-3 w-3/12 ">
            <img
              src={gown1}
              alt=""
              // width={500}
              // height={650}
              className="object-cover"
            />
          </div>
          <div className="card w-96 h-auto">
            <h1 className="text-yellow-800 font-medium p-1">
              Sleek Wedding Gown
            </h1>
            <p className="font-medium text-gray-700 p-1">$95 USD</p>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              sequi corporis, distinctio harum doloribus deleniti, ratione
              consequatur adipisci sit dolorum et facere hic asperiores totam!s
            </p>
            <div className="btn_container p-1">
              <div className="flex justify-between">
                <label htmlFor="" className="p-2 text-center">
                  color
                </label>
                <select name="" id="">
                  <option value="">choose an Option</option>
                  <option value="">White</option>
                  <option value="">green</option>
                  <option value="">Black</option>
                </select>
              </div>
              <div className="flex justify-between">
                <label htmlFor="" className="p-2">
                  size
                </label>
                <select name="" id="">
                  <option value="">choose an Option</option>
                  <option value="">L</option>
                  <option value="">xl</option>
                  <option value="">xxl</option>
                </select>
              </div>
              <div className="flex justify-between">
                <label htmlFor="" className="p-2">
                  Quantity
                </label>
                <select name="" id="">
                  <option value="">choose an Option</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
