"use client";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

import {
  dataCoursePrices,
  dataDevicesPrices,
  dataSolutionPrices,
} from "~/services/data";

export default function TablePrices() {
  const [isActive, setActive] = useState(true);
  return (
    <div className="px-28 flex flex-col justify-center items-center py-24 sm:px-10 xs:px-10 xs:py-14">
      <h1 className="text-4xl font-semibold text-center xs:text-2xl">
        Bảng báo giá
      </h1>
      <div className="bg-[#eee] rounded-lg w-[272px] flex justify-center items-center py-2 mt-16 xs:mt-10 ">
        <input
          type="button"
          value="On Premise"
          onClick={() => setActive(true)}
          className={
            isActive
              ? "py-3 px-4 cursor-pointer focus:bg-white bg-white rounded-lg outline-none"
              : "py-3 px-4 cursor-pointer focus:bg-white  rounded-lg outline-none"
          }
        />
        <input
          type="button"
          value="Cloud Based"
          onClick={() => setActive(false)}
          className={
            isActive
              ? "py-3 px-4 cursor-pointer focus:bg-white  rounded-lg outline-none"
              : "py-3 px-4 cursor-pointer focus:bg-white  rounded-lg outline-none"
          }
        />
      </div>
      <div className=" w-full flex justify-end   mt-16 xs:mt-8">
        <div className="flex justify-between  2xl:w-[40%] xl:w-[40%] xs:flex-col  xs:w-full ">
          <div className="flex flex-col items-center py-8 hover:bg-[#eee] rounded-md px-10 sm:px-4 sm:py-4">
            <span className="text-xl font-medium">Giá thuê/năm</span>
            <button className="py-3 px-10 bg-[#f14D5D] rounded-md text-white xs:hidden">
              <div className=" w-14 ">Liên hệ</div>
            </button>
          </div>
          <div className="flex flex-col items-center py-8 bg-[#eee] px-10 rounded-md sm:px-4 sm:py-4">
            <span className="text-xl font-medium">Tùy chỉnh</span>
            <button className="py-3 px-10 bg-[#f14D5D] rounded-md text-white xs:w-full xs:mt-2">
              <div className=" w-14 xs:w-full">Liên hệ</div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 ">
        <ul className=" flex flex-col  justify-between">
          <li className="bg-red-50 py-3 border-b-2 border-blue-200 ">
            <div className=" flex flex-col  items-center">
              <span className="text-lg font-semibold">Giải pháp/Phần mềm</span>
              <span className="">Chi phí thiết lập hệ thống </span>
            </div>
          </li>
          {dataSolutionPrices.map((item, index) => {
            return (
              <li
                key={index}
                className="py-3 border-b-2 border-blue-200 w-full  cursor-pointer hover:bg-[#eee] pl-8 xs:pl-2"
              >
                <div className="flex  justify-between  w-full">
                  <span className="w-[57%] xs:text-sm xs:w-[70%]  xs-w[60%]">
                    {item.solution}
                  </span>
                  <div className="w-[40%] flex items-center  justify-between xs:w-[25%] ">
                    <span className="w-40 text-center xs:text-sm">
                      {item.price}
                    </span>
                    <span className="w-40 text-center xs:text-sm xs:hidden">
                      Liên hệ
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="bg-red-50 py-3 text-lg font-semibold text-center ">
            <span>Phần cứng/Kít thực hành thông minh</span>
          </li>
          {dataDevicesPrices.map((item, index) => {
            return (
              <li
                key={index}
                className="py-3 border-b-2 border-blue-200 w-full  cursor-pointer hover:bg-[#eee] pl-8 xs:pl-2"
              >
                <div className="flex  justify-between  w-full">
                  <span className="w-[57%] xs:text-sm xs:w-[70%]  xs-w[60%]">
                    {item.solution}
                  </span>
                  <div className="w-[40%] flex items-center  justify-between xs:w-[25%] ">
                    <span className="w-40 text-center xs:text-sm">
                      {item.price}
                    </span>
                    <span className="w-40 text-center xs:text-sm xs:hidden">
                      Liên hệ
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="bg-red-50 py-3 text-lg font-semibold  text-center">
            <span>Khoá học thực hành</span>
          </li>
          {dataCoursePrices.map((item, index) => {
            return (
              <li
                key={index}
                className="py-3 border-b-2 border-blue-200 w-full  cursor-pointer hover:bg-[#eee] pl-8 xs:pl-2"
              >
                <div className="flex justify-between  w-full">
                  <span className="w-[57%] xs:text-sm xs:w-[70%] ">
                    {item.solution}
                  </span>
                  <div className="w-[40%] flex items-center  justify-between xs:w-[25%]  ">
                    <span className="w-40 text-center xs:text-sm">
                      {item.price}
                    </span>
                    <span className="w-40 text-center xs:text-sm xs:hidden">
                      Liên hệ
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="btn-container flex items-start mt-8  w-full"
        // data-aos="zoom-in"
      >
        <button className="btn-content px-7 py-3 bg-[#AA3232] rounded-md flex gap-2 items-center text-white font-medium hover:bg-[#1513be]  ">
          <span className=" text-xl text-white">Báo giá tất cả sản phẩm</span>
          <div className="icon-btn-services">
            <FaArrowRight className=" text-xl text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}
