import React from "react";
import { dataPlusProps, indexItemProps } from "~/types/CustomType";
import Image, { StaticImageData } from "next/image";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
type SectionOneProps = {
  title?: Array<string>;
  dataPlus?: dataPlusProps[];
  contentText?: Array<string>;
  dataImage?: string | StaticImageData;
  header: indexItemProps;
};
export default function SectionOne({
  header,
  title,
  dataImage,
  dataPlus,
  contentText,
}: SectionOneProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full py-14 px-16">
      <div className="mb-8 flex flex-col gap-6 w-full ">
        <span className="text-2xl font-semibold ">{header.nameItem}</span>
        {/* <hr className="w-full border-red-600 border-1" /> */}
      </div>
      <span>{title ? title[0] : ""}</span>
      <div className="flex items-center justify-around  w-full ">
        <div className="flex flex-col w-[45%] ">
          <span>{contentText ? contentText[0] : ""}</span>
          <div className="flex flex-col gap-1">
            {dataPlus?.map((item, index) => {
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
        <div className="w-1/2 ">
          <Image
            src={dataImage as StaticImageData}
            alt="dataImage"
            width={500}
            height={100}
            className="w-full h-80 object-center object-contain"
          />
        </div>
      </div>
    </div>
  );
}
