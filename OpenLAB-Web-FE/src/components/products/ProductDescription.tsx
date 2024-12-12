import { FaSignal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { FaUsers } from "react-icons/fa";
type ProductDescriptionProps = {
  srcImg: string | StaticImageData;
  type?: string;
  nameProduct: string;
  description: string;
  id?: string | number;
};

const ProductDescription = ({
  srcImg,
  type,
  nameProduct,
  description,
  id,
}: ProductDescriptionProps) => {
  return (
    <div className=" flex flex-col relative cursor-pointer w-[93%] xs:w-[95%]  h-[480px] rounded-xl px-4 py-4 shadow-md  item-center hover:shadow-2xl  sm:mt-4 ">
      <div className="mb-5 flex justify-center relative hover:scale-105 hover:transition-all ease-in duration-200">
        <Image
          src={srcImg}
          alt="image-product-section"
          className="w-full h-56 object-center object-fill border-[#8AD9E4] border-2 rounded "
        />
        <div className="flex justify-end items-center  absolute w-full h-full  top-0 left-0 opacity-0 hover:opacity-100 ">
          <Link
            href={
              type === "APP"
                ? `/products/solutions/introduction/${id}`
                : type === "COURSE"
                ? `products/courses/introduction/${id}`
                : `products/device-kits/introduction/${id}`
            }
            className="flex justify-center items-center w-full h-full  "
          >
            <button className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 href-100%  flex gap-2 items-center hover:transition-colors  hover:text-white transition ease-in-out delay-100 ">
              Xem chi tiết <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3 ">
        <div className="flex gap-1 items-center">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStarHalfAlt className="text-yellow-500" />
        </div>
        <div className="flex items-center gap-2">
          <FaSignal className="text-green-600" />
          <span className="text-xs font-normal">Có sẵn</span>
        </div>
      </div>
      <div className="flex justify-between py-2 ">
        <div className="bg-[#081140] px-2 py-1 text-white rounded-md uppercase">
          {type}
        </div>

        <div className="flex gap-2 items-center ">
          <FaUsers className="mt-[1px]" />
          <span className=" font-semibold text-sm text-end">1236</span>
        </div>
      </div>
      <div className="text-center  ">
        <span className="text-[#081140] text-base font-semibold ">
          {nameProduct}
        </span>
        <p className="text-base  gap-[2px] text-justify  block  ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
