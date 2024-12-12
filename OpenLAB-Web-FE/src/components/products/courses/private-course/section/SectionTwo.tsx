import Image, { StaticImageData } from "next/image";
import React from "react";
import { indexItemProps } from "~/types/CustomType";
type SectionTwoProps = {
  title?: Array<string>;
  contentText?: Array<string>;
  dataImage?: string | StaticImageData;
  header: indexItemProps;
  child?: boolean;
};
export default function SectionTwo({
  title,
  dataImage,
  header,
  contentText,
  child = false,
}: SectionTwoProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full px-16 pb-14">
      <div className="mb-8 flex flex-col gap-6  w-full ">
        {child ? (
          <>
            <span className="text-xl font-semibold block text-center">
              {header.nameItem}
            </span>
          </>
        ) : (
          <>
            <hr className="w-full border-2 border-red-600 mb-2" />
            <span className="text-2xl font-semibold ">{header.nameItem}</span>
          </>
        )}
      </div>
      <span>{title ? title[0] : ""}</span>
      <div className="flex items-center justify-between w-full h-80">
        <div className="w-[45%] flex items-start h-full ">
          <ul className=" ">
            {contentText && contentText.length !== 0
              ? contentText.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-1 py-4 justify-between"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center text-white">
                        {index + 1}
                      </div>
                      <span className="w-[90%] text-justify">{item}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <div className="w-1/2  ">
          <Image
            src={dataImage as StaticImageData}
            alt="dataImage"
            width={500}
            height={100}
            className="w-full h-full object-center object-contain"
          />
        </div>
      </div>
    </div>
  );
}
