import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { dataTab, dataSlide, indexItemProps } from "~/types/CustomType";
import { StaticImageData } from "next/image";
import SchemaEsp8266 from "~/components/custom/image-course/esp8266/SchemaEsp8266";
type SectionFiveProps = {
  dataTab?: dataTab[];
  header: indexItemProps;
  title?: Array<string>;
  contentText?: Array<string>;
  dataSlides?: dataSlide[];
  dataImage?: string | StaticImageData;
};
export default function SectionFive({
  title,
  dataTab,
  header,
}: SectionFiveProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full px-16 ">
      <hr className="w-full border-2 border-red-600 mb-8 " />
      <span className=" block w-full text-2xl font-semibold ">
        {header?.nameItem}
      </span>
      <div className="mb-7">
        <SchemaEsp8266 />
      </div>

      <span className="text-3xl font-semibold">{title ? title[0] : ""}</span>
      <div className="flex justify-center items-center w-full ">
        {dataTab && dataTab?.length !== 0 ? (
          <Tabs defaultValue="0" className=" ">
            <TabsList className="w-full bg-[#eee] h-12 flex justify-between rounded">
              {dataTab.map((item, index) => {
                return (
                  <TabsTrigger
                    value={`${index}`}
                    key={index}
                    className=" whitespace-nowrap px-4 h-full rounded data-[state=active]:bg-blue-700 data-[state=active]:text-white py-2"
                  >
                    {item.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {dataTab.map((item, index) => {
              return (
                <TabsContent value={`${index}`} className="w-full" key={index}>
                  <div className="flex flex-col items-center py-8 gap-4  px-4 w-[745px] h-[200px]">
                    <ul className="flex flex-col">
                      <li className=" block">{item.description}</li>
                    </ul>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
