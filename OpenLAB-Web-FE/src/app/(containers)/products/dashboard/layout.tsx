"use client";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

import CalendarCustom from "~/components/custom/CalendarCustom";
import Link from "next/link";
import MainLayout from "~/components/main-layout";
import {
  Dialog,
  DialogContent,
  //DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Calendar, Settings, ChartNoAxesCombined } from "lucide-react";
import { LuCopyright } from "react-icons/lu";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <MainLayout coursePage={true}>
      <div
        className={`flex w-full min-h-screen  ${
          isOpenMenu ? "justify-end px-4" : ""
        }`}
      >
        <div
          className={`w-[19%] border-r-2 border-[#eee] z-10 bg-white transition-opacity ease-out duration-300 flex flex-col justify-between ${
            isOpenMenu
              ? "opacity-100 fixed top-0 left-0 h-screen "
              : " opacity-0 pointer-events-none absolute left-0"
          }`}
        >
          <nav className="flex flex-col">
            <div className="mb-5  py-4">
              <Link href={"/"} className="cursor-pointer flex flex-col">
                <span
                  className="text-5xl xs:tracking-widest font-semibold text-center text-[#D32F2F] text-shadow-lg xs:text-4xl"
                  style={{
                    textShadow:
                      "rgb(106 109 129) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
                  }}
                >
                  OpenLAB
                </span>
                <span className="text-[#D32F2F] font-semibold text-xl text-center tracking-widest xs:tracking-normal">
                  AI/IoT as a service
                </span>
              </Link>
            </div>
            <ul>
              <Link href={"/products/dashboard"}>
                <li className="flex items-center   py-2 px-4 gap-2 hover:text-blue-500 hover:bg-[#eee]">
                  <ChartNoAxesCombined />
                  <span>Dashboard</span>
                </li>
              </Link>

              <li className="flex items-center   hover:text-blue-500 hover:bg-[#eee] cursor-pointer">
                <Dialog>
                  <DialogTrigger
                    asChild
                    className="cursor-pointer  py-2 px-4  w-full h-full"
                  >
                    <div className="flex gap-2 items-center">
                      <Calendar />
                      <span>{"Calendar"}</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="">
                    <DialogTitle>Calendar</DialogTitle>
                    <div className=" flex justify-center items-center">
                      <CalendarCustom />
                    </div>
                  </DialogContent>
                </Dialog>
              </li>

              <Link href={"/products/dashboard/devices"}>
                <li className="flex items-center  py-2 px-4 gap-2 hover:text-blue-500 hover:bg-[#eee]">
                  <Settings />
                  <span>{"Settings"}</span>
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-2 mb-5 px-4">
            <LuCopyright />
            <span className="text-sm font-normal  mr-1">
              2024 Bản quyền thuộc về  MKAdmin
            </span>
          </div>
        </div>
        <div
          className={` flex flex-col justify-center  h-full transition-all ease-out duration-300 items-center   ${
            isOpenMenu ? "w-[81%] px-4 " : "w-full"
          }`}
        >
          <div className=" flex w-full  ">
            <button
              onClick={() => setOpenMenu(!isOpenMenu)}
              className="px-2 py-2 hover:bg-[#eee] rounded"
            >
              <MdMenuOpen className="text-2xl" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </MainLayout>
  );
}
