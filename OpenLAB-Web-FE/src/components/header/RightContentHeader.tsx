"use client";
import { RxAvatar } from "react-icons/rx";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";
import { IoCalculatorOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import { handleLogout } from "~/services/Services";
import { useAuthStore } from "~/store/auth/AuthStore";
import Image from "next/image";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import aiService from "~/assets/image/service-image/Chatbot_service.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export default function RightContentHeader() {
  const { isAuth, setIsAuth, setUser } = useAuthStore();
  const handleLogoutPage = async () => {
    await handleLogout();
    const resetUser = {
      _id: "",
      email: "",
      fullname: "",
      role: "",
      address: "",
      dateOfBirth: "",
      accessToken: "",
      course: [],
    };
    setIsAuth(false);
    setUser(resetUser);
  };
  return (
    <div className="content-right w-[25%] flex items-center justify-end text-lg font-medium pl-5 gap-6 sm:hidden xs:hidden">
      {isAuth === true ? (
        <>
          <div className="flex gap-7 items-center">
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
                      <Link href={"#"}>
                        <CommandItem className="flex items-center gap-2 cursor-pointer">
                          <FaAddressCard className="cursor-pointer " />
                          Thông tin cá nhân
                        </CommandItem>
                      </Link>

                      <Link href="/products/courses/search-course">
                        <CommandItem className="flex items-center gap-2 cursor-pointer">
                          <MdEditCalendar />
                          Thông tin khóa học
                        </CommandItem>
                      </Link>
                      <Link href="/products/dashboard">
                        <CommandItem className="flex items-center gap-2 cursor-pointer">
                          <IoCalculatorOutline />
                          Thông tin Thiết bị/Kit
                        </CommandItem>
                      </Link>

                      <Link onClick={handleLogoutPage} href={"/auth"}>
                        <CommandItem className="flex items-center gap-2 cursor-pointer">
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
        </>
      ) : (
        <div className="flex items-center justify-end gap-12 w-full ">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="xs:w-full sm:w-full">
                <div className="flex justify-center items-center gap-2 cursor-pointer ">
                  <Image
                    src={aiService}
                    alt={"ai-chat"}
                    className="w-14 h-14 object-contain "
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0 bg-white " side="bottom">
                <Command>
                  <CommandList>
                    <CommandItem className="flex items-center gap-2 text-[13px]">
                      Chat để được tư vấn về sản phẩm
                    </CommandItem>
                  </CommandList>
                </Command>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Link href={"/auth"}>
            <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
              Đăng nhập
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
