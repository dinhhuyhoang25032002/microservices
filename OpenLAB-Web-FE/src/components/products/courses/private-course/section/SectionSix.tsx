import React from "react";
import { indexItemProps } from "~/types/CustomType";
type SectionSixProps = {
  header: indexItemProps;
  contentText?: Array<string>;
};
export default function SectionSix({ header, contentText }: SectionSixProps) {
  return (
    <div>
      <hr className="w-full border-2 border-red-600 mb-8 " />
      <span className=" block w-full text-2xl font-semibold ">
        {header?.nameItem}
      </span>
      <div className="ml-8 mt-8">
        {contentText?.map((item, index) => {
          return (
            <p
              key={index}
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        })}
      </div>
    </div>
  );
}
