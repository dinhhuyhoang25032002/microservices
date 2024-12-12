"use client";
import { IoCheckmarkCircle } from "react-icons/io5";
import imageSolution1 from "~/assets/image/solution/solution1.jpeg";
import imageSolution2 from "~/assets/image/solution/solution2.jpeg";
import imageSolution3 from "~/assets/image/solution/solution3.jpeg";
import imageSolution4 from "~/assets/image/solution/solution4.jpg";
import imageIphone from "~/assets/image/solution/iPhone-2.png";
import Image from "next/image";
import Link from "next/link";
const SectionSolution = () => {
  return (
    <div className="body-section-solution py-16 px-28 bg-[#f4f7fc] sm:px-16 lg:px-20 xs:px-4 xs:py-14">
      <div className="content-section-solution  sm:flex-col xs:flex-col text-center flex justify-between gap-8 sm:gap-16 items-center">
        <div
          className="content-left sm:w-full xs:w-full text-start sm:text-center  w-[65%]"
          data-aos="fade-right"
        >
          <span className="text-4xl font-bold leading-10 lg:text-3xl xs:text-2xl xs:text-center xs:w-full xs:mb-3 block">
            Các giải pháp tiên phong
          </span>
          <p className="mt-2 font-normal text-base mb-8 ">
            Các gói giải pháp được lựa chọn riêng theo từng nhu cầu, quy mô.
            Tiêu chuẩn khẳng định vị thế tiên phong của OpenLAB
          </p>
          <div className=" flex sm:justify-around items-center ">
            <ul>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Lab thông minh:
                <span className="font-semibold">OpenLab</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Trợ giảng số AI:
                <span className="font-semibold">OpenChat</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Thực hành từ xa:
                <span className="font-semibold">E-Lab</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Trục liên thông dữ liệu:
                <span className="font-semibold">LabLink</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Quản lý thiết bị số:
                <span className="font-semibold">E-Chip</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Thư viện thông minh:
                <span className="font-semibold">OpenLibrary</span>
              </li>
              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Lớp học thông minh:
                <span className="font-semibold">OpenClass</span>
              </li>

              <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg xs:text-base xs:mb-3">
                <IoCheckmarkCircle className="text-blue-600" />
                Giải pháp Thi online:
                <span className="font-semibold">E-Exam</span>
              </li>
            </ul>
            <Image
              className="object-cover hover:scale-105 cursor-pointer w-[230px] h-[310px] hidden sm:flex   object-center px-3 py-3 "
              src={imageIphone}
              alt={""}
            />
          </div>
          <Link href={"/products/solutions"}>
            <div className=" flex sm:justify-center">
              <button
                className={
                  "px-5 text-xl py-3 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]"
                }
              >
                Tất cả các giải pháp
              </button>
            </div>
          </Link>
        </div>
        <div
          className="content-right w-1/2 sm:w-full xs:w-full flex gap-7 justify-center items-center "
          data-aos="fade-up"
        >
          <div className="cover-image-left flex flex-col gap-7 mt-14 sm:mt-0">
            <Image
              className="object-cover hover:scale-105 cursor-pointer shadow-2xl w-[230px] h-[230px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white xs:h-40"
              src={imageSolution1}
              alt={""}
            />
            <Image
              className="object-contain shadow-2xl w-[230px] h-[230px] hover:scale-105 cursor-pointer border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white xs:h-40"
              src={imageSolution2}
              alt={""}
            />
          </div>
          <div className="cover-image-left flex-col gap-7 mt-14 sm:mt-0 hidden sm:flex">
            <Image
              className="object-cover hover:scale-105 cursor-pointer shadow-2xl w-[230px] h-[230px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution1}
              alt={""}
            />
            <Image
              className="object-contain shadow-2xl w-[230px] h-[230px] hover:scale-105 cursor-pointer border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution2}
              alt={""}
            />
          </div>
          <div className="cover-image-right  flex flex-col gap-7">
            <Image
              className="object-contain w-[230px] shadow-2xl hover:scale-105 cursor-pointer h-[230px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white xs:h-40"
              src={imageSolution3}
              alt={""}
            />
            <Image
              className="object-contatin hover:scale-105 cursor-pointer shadow-2xl w-[230px] h-[230px] border-[#8AD9E4] border-2 rounded object-center  bg-white xs:h-40"
              src={imageSolution4}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSolution;
