"use client";
import { LuQuote } from "react-icons/lu";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { useFetchApi } from "~/hooks/useFetchApi";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAuthStore } from "~/store/auth/AuthStore";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
type BannerProductProps = {
  nameProduct: string;
  description: string;
  starNumber: string;
  idCourse: string;
};
const BannerProduct = ({
  nameProduct,
  description,
  starNumber,
  idCourse,
}: BannerProductProps) => {
  const startLength = Math.floor(parseInt(starNumber));
  const startOdd = starNumber?.split(".")[1];
  const { user } = useAuthStore();
  const { _id } = user;
  const [isOpenAlert, setOpenAlert] = useState(false);
  const [urlRedict, seturlRedict] = useState<string>("");
  const fetcher = useFetchApi("/payments/buy-course", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      userId: _id,
      courseId: idCourse,
    }),
  });
  const handleRedictMomo = async () => {
    const res = await fetcher();
    console.log(res);
    if (res.status === 200 && res.payload && res.payload.data) {
      const payUrl = res.payload.data.response?.payUrl;
      setOpenAlert(true);
      seturlRedict(payUrl);
    }
  };

  return (
    <div className="flex px-20 py-16 xs:flex-col xs:px-4 bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100%">
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
        {isOpenAlert && urlRedict && (
          <Alert className=" bg-white">
            <div className="flex justify-between w-full items-center mb-3">
              <div className="flex gap-2 ">
                <RocketIcon className="h-4 w-4  mt-1" />{" "}
                <AlertTitle className="text-lg font-semibold ">
                  Cảnh báo!
                </AlertTitle>
              </div>
              <button onClick={() => setOpenAlert(false)}>
                <FaXmark className="" />
              </button>
            </div>

            <AlertDescription className="text-lg  flex flex-col  ">
              <span className="inline-block whitespace-nowrap">
                Ấn vào nút chuyển tiếp dưới đây, bạn đã chấp nhận chuyển đến
                trang thanh toán của MOMO.
              </span>
              <div className="w-full flex justify-end mt-5">
                <a
                  className="  px-3 py-1 text-white bg-red-500 rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold"
                  href={`${urlRedict}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Đi đến trang thanh toán
                </a>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div className="w-[60%] flex flex-col xs:w-full pr-16 xs:pr-0">
        <div className=" flex gap-1">
          <span className="text-[#D32F2F] font-semibold">Trang chủ /</span>
          <span className="text-[#D32F2F] font-semibold">Sản phẩm /</span>
          <span className="text-white font-semibold">{nameProduct}</span>
        </div>
        <span className="text-white text-4xl font-semibold py-5 xs:text-2xl">
          {nameProduct}
        </span>
        <div className="flex  items-start gap-2">
          <LuQuote className="rotate-180 text-white text-4xl font-semibold " />
          <p className="py-2 text-white">{description}</p>
        </div>
        <div className="flex gap-10 py-2">
          <div className="flex gap-1 items-center">
            {Array.from({ length: startLength }, (_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}

            {parseInt(startOdd) >= 5 ? (
              <FaStarHalfAlt className="text-yellow-500" />
            ) : (
              <></>
            )}
          </div>
          <div className="flex gap-2 items-center text-white">
            <FaUniversity className="mt-[1px]" />
            <span className=" font-semibold text-sm text-end">
              6 đơn vị đã sử dụng
            </span>
          </div>
        </div>
        <div className="py-6 flex gap-10">
          <button
            className="px-5 py-3 text-white bg-red-500 rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold"
            onClick={handleRedictMomo}
          >
            Đăng Kí Ngay
          </button>

          <AlertDialog>
            <AlertDialogTrigger className="px-5 py-3  bg-[#fff] rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold hover:text-white">
              Nhận Tài Liệu Giới Thiệu
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white rounded">
              <AlertDialogHeader>
                <AlertDialogTitle className="justify-between items-center  flex">
                  <span>Bạn muốn tìm hiểu thêm về khóa học? </span>
                  <AlertDialogCancel className="border-none outline-none shadow-none">
                    <Cross2Icon />
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span>Hoàn thành các thông tin để tiếp tục</span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-row-reverse justify-between items-center ">
                <AlertDialogCancel className="w-[40%]">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="w-[40%]">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="w-[38%] px-3 py-3 xs:w-full xs:px-0  xs:py-0 xs:h-52">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/xzu3QXwo1BU?si=A36ch_COhP-rivIR"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BannerProduct;
