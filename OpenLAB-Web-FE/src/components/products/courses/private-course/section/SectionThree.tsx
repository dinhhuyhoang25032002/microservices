import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  indexItemProps,
  dataListProps,
  dataMergeProps,
} from "~/types/CustomType";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
import { IoMdCheckmark } from "react-icons/io";
type SectionThreeProps = {
  header: indexItemProps;
  dataImage?: string | StaticImageData;
  title?: Array<string>;
  dataList?: dataListProps;
  dataList2?: dataListProps;
  dataMerge?: dataMergeProps;
};
export default function SectionThree({
  header,
  dataList,
  dataImage,
  dataList2,
  dataMerge,
  title,
}: SectionThreeProps) {
  return (
    <div className="flex flex-col  justify-center px-16">
      <div className="flex flex-col items-center justify-center  pb-14">
        <div className="mb-8 flex flex-col gap-6  w-full ">
          <hr className="w-full  border-2 border-red-600 mb-2" />
          <span className="text-2xl font-semibold ">{header.nameItem}</span>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-2 ">
          <Image
            src={dataImage as StaticImageData}
            alt="dataImage"
            width={500}
            height={100}
            className="w-full h-80 object-center object-contain "
          />
          <span>{title}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="mb-8 flex flex-col gap-6  w-full ">
          <hr className="w-full  border-2 border-red-600 mb-2" />
          <span className="text-2xl font-semibold ">{dataList?.header}</span>
        </div>
        <div className=" flex justify-around w-full">
          <ul>
            {dataList?.data?.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-3 py-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center text-white">
                    <IoMdCheckmark />
                  </div>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
          <ul>
            {dataList2?.data?.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-3 py-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center text-white">
                    <IoMdCheckmark />
                  </div>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-16">
        <div className="mb-8 flex flex-col gap-6  w-full ">
          <hr className="w-full  border-2 border-red-600 mb-2" />
          <span className="text-2xl font-semibold ">{dataMerge?.header}</span>
        </div>
        <div className=" flex justify-around w-full">
          <div className="w-[45%]">
            {dataMerge?.data?.map((item, index) => {
              return (
                <div key={index}>
                  <span className="block text-justify">{item.label}</span>
                  <div>
                    {item?.description?.map((item, index) => {
                      return (
                        <div key={index}>
                          <AccordionExtra
                            content={item.title}
                            description={item.description}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[45%]">
            {dataMerge?.image ? (
              <Image
                src={dataMerge?.image}
                alt="data-merge"
                width={500}
                height={500}
                className="w-full h-52 object-top object-contain"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
