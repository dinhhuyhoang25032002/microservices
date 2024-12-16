"use client";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoCalculatorOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import { RxAvatar } from "react-icons/rx";
import { LuBellRing } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import OptionProduct from "~/components/header/OptionProduct";
import OptionBlog from "~/components/header/OptionBolg";
export default function LeftContentHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div
      className="content-left w-[70%]  flex justify-end  items-center h-full gap-3
        sm:w-full sm:justify-between relative  sm:px-14 xs:w-full xs:justify-between  xs:px-5"
    >
      <div
        className="logo flex flex-col justify-center items-center w-4/12 h-[75px]
          sm:w-[35%] sm:items-start xs:w-[61%] xs:items-start"
      >
        <Link href={"/"} className="cursor-pointer flex flex-col">
          <span
            className="text-5xl xs:tracking-widest font-semibold text-center text-[#D32F2F] text-shadow-lg xs:text-4xl"
            style={{
              textShadow:
                "rgb(106 109 129) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
            }}
          >
            MKAdmin
          </span>
          <span className="text-[#D32F2F] font-semibold text-xl text-center tracking-widest xs:tracking-normal">
            Digital Data Manage
          </span>
        </Link>
      </div>
      <div className=" gap-4 items-center hidden xs:flex">
        <div className="relative cursor-pointer">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">
            2
          </span>
        </div>
        <div className="relative cursor-pointer">
          <LuBellRing className="text-2xl" />
          <span className="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">
            3
          </span>
        </div>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <div className="flex justify-center items-center gap-2 cursor-pointer ">
                <RxAvatar className="cursor-pointer text-2xl" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="px-0 py-0 bg-white ">
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem className="flex items-center gap-2">
                      <FaAddressCard className="cursor-pointer " />
                      Thông tin cá nhân
                    </CommandItem>

                    <Link href="/products/courses/search-course">
                      <CommandItem className="flex items-center gap-2">
                        <MdEditCalendar />
                        Thông tin khóa học
                      </CommandItem>
                    </Link>
                    <Link href="/products/devices-kits/search-kit">
                      <CommandItem className="flex items-center gap-2">
                        <IoCalculatorOutline />
                        Thông tin Thiết bị/Kit
                      </CommandItem>
                    </Link>
                    <Link href="/login">
                      <CommandItem className="flex items-center gap-2">
                        <MdLogout />
                        Đăng xuất
                      </CommandItem>
                    </Link>
                  </CommandGroup>
                </CommandList>
              </Command>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className="hidden sm:block xs:block cursor-pointer z-10 ml-1"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <FiMenu className="text-2xl" />
      </div>

      <div
        className={`w-8/12 sm:flex-col xs:flex-col  xs:inline-flex flex text-lg font-medium justify-around items-center sm:justify-start sm:items-start xs:justify-start xs:items-start
              sm:bg-[#080544] xs:bg-[#080544] sm:text-[#1464cc] xs:text-[#1464cc]  sm:absolute xs:absolute sm:duration-200 xs:duration-200 sm:h-screen 
            sm:w-1/3 sm:z-20 xs:w-[45%] xs:z-20 xs:h-screen xs:right-0 xs:top-0 sm:right-0 sm:top-0 sm:transition-all xs:transition-all sm:ease-in xs:ease-in  ${
              isOpenMenu
                ? "sm:translate-x-0 xs:translate-x-0"
                : " sm:translate-x-full xs:translate-x-full"
            }`}
        //  data-aos="zoom-out"
      >
        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className=" px-4 pt-2 cursor-pointer hidden sm:flex sm:justify-end  xs:flex xs:justify-end w-full"
        >
          <HiXMark />
        </div>
        <Link href="/" className=" sm:w-full xs:w-full ">
          <span
            className="cursor-pointer hover:text-[#1464cc]  block  
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px] font-semibold "
          >
            Trang chủ
          </span>
        </Link>

        <Link href="/about" className=" sm:w-full xs:w-full">
          <span
            className="cursor-pointer hover:text-[#1464cc] flex font-semibold
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px]"
          >
            Giới thiệu
          </span>
        </Link>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <span
                className="flex items-center gap-0.5 cursor-pointer title-product hover:text-[#1464cc] font-semibold
              sm:pl-3  sm:border-b-[1px] sm:justify-between xs:pl-3  xs:border-b-[1px] xs:justify-between sm:w-full xs:w-full"
              >
                <span className=" sm:py-1">Sản phẩm</span>
                <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px] ">
                  <FaAngleDown className="text-xs  icon-product " />
                </div>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-0 py-0 bg-white">
              <OptionProduct />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <Link href="/blog">
                <span
                  className="cursor-pointer hover:text-[#1464cc] font-semibold flex items-center gap-0.5 sm:pl-3 sm:border-b-[1px] sm:justify-between  xs:pl-3  xs:border-b-[1px] xs:justify-between"
                  data-tooltip-id="my-blog"
                >
                  <span className=" sm:py-1">Blog</span>
                  <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px]">
                    <FaAngleDown className="text-xs  icon-product " />
                  </div>
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white">
              <OptionBlog />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link href="/contact" className=" sm:w-full xs:w-full ">
          <span className="cursor-pointer hover:text-[#1464cc] flex sm:pl-3 xs:pl-3 font-semibold">
            Liên hệ
          </span>
        </Link>
      </div>
    </div>
  );
}
