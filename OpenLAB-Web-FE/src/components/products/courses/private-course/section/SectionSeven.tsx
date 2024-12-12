import React from "react";
import { indexItemProps } from "~/types/CustomType";
import Image, { StaticImageData } from "next/image";
type SectionSevenProps = {
  header: indexItemProps;
  dataImage?: string | StaticImageData;
};
export default function SectionSeven({ header, dataImage }: SectionSevenProps) {
  return (
    <div className="mb-8">
      <hr className="w-full border-2 border-red-600 mb-8 " />
      <span className=" block w-full text-2xl font-semibold ">
        {header?.nameItem}
      </span>
      <div className="flex items-center justify-center">
        <Image
          src={dataImage as StaticImageData}
          width={900}
          height={500}
          alt="sơ đồ đấu nối"
        />
      </div>
    </div>
  );
}
