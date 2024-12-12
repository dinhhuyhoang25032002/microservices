"use client";
import Slider from "react-slick";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React, { Suspense, useRef } from "react";
import { dataTab, dataSlide, indexItemProps } from "~/types/CustomType";
import { settings } from "~/configs/settingSlider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import SectionTwo from "./SectionTwo";
type SectionFourProps = {
  dataTab?: dataTab[];
  title?: Array<string>;
  contentText?: Array<string>;
  dataSlides?: dataSlide[];
  dataImage?: string | StaticImageData;
  header: indexItemProps;
};
const newSettings = {
  ...settings,
  autoplay: false,
  //autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function SectionFour({
  title,
  dataTab,
  dataImage,
  header,
  dataSlides,
  contentText,
}: SectionFourProps) {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  console.log(title);
  const subtitle = title ? title[0] : "";
  return (
    <div className="flex flex-col w-full items-center px-16   ">
      <div className="mb-8 flex flex-col gap-6  w-full ">
        <hr className="w-full border-2 border-red-600 mb-2" />
        <span className="text-2xl font-semibold ">{header?.nameItem}</span>
      </div>
      <SectionTwo
        child={true}
        header={{
          nameItem: subtitle,
        }}
        contentText={contentText}
        dataImage={dataImage}
      />
      <div className="flex flex-col w-full items-center px-14 ">
        <span className="text-xl font-semibold">{title ? title[1] : ""}</span>
        <div className="w-full flex justify-between items-center ">
          <button
            className=" px-5 py-5 rounded-full bg-black w-fit h-fit  "
            onClick={previous}
          >
            <FaAngleLeft className="text-2xl text-white" />
          </button>
          <div className="w-[80%]">
            <Slider {...newSettings} ref={sliderRef}>
              {dataSlides?.map((item, index) => {
                return (
                  <div className="my-4" key={index}>
                    <div className="w-full text-center flex flex-col items-center gap-8 ">
                      <span className=" bg-blue-600 text-white px-3 py-2 rounded text-lg font-semibold">
                        Step {index + 1}
                      </span>
                      <div className="w-full flex items-center gap-8">
                        <Image
                          src={item.image}
                          alt="image-description-course"
                          className="rounded w-full h-[450px] object-contain object-top"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <p
                        className="text-justify"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <button
            className=" px-5 py-5 rounded-full bg-black w-fit h-fit  "
            onClick={next}
          >
            <FaAngleRight className="text-2xl text-white" />
          </button>
        </div>
      </div>
      {/* <div className=" flex justify-around">
        <div className="w-1/2">
          <ul>
            {contentText?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          {dataImage ? (
            <Image
              src={dataImage as StaticImageData}
              alt="dataImage"
              width={500}
              height={100}
              className="w-full h-48 object-center object-fill border-[#8AD9E4] border-2 rounded "
            />
          ) : (
            <></>
          )}
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-2xl font-semibold mb-8">
          {title ? title[0] : ""}
        </span>
        <div className="flex justify-center items-center w-full ">
          {dataTab && dataTab?.length !== 0 ? (
            <Tabs defaultValue="0" className="w-full ">
              <TabsList className="w-full bg-[#eee] h-fit flex justify-center rounded">
                {dataTab.map((item, index) => {
                  return (
                    <TabsTrigger
                      value={`${index}`}
                      key={index}
                      className="w-[50%] whitespace-nowrap h-full rounded data-[state=active]:bg-blue-700 data-[state=active]:text-white py-4"
                    >
                      {item.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {dataTab.map((item, index) => {
                return (
                  <TabsContent
                    value={`${index}`}
                    className="w-full "
                    key={index}
                  >
                    <Suspense>
                      <div className="flex justify-around items-center py-8 gap-4 w-full">
                        <p className="text-justify w-[30%] block ">
                          {item.description}
                        </p>

                        <div className="w-[45%]  flex justify-center">
                          <Image
                            src={item.image}
                            alt="data-image"
                            width={900}
                            height={500}
                            className="object-center object-contain w-1/2 "
                          />
                        </div>
                      </div>
                    </Suspense>
                  </TabsContent>
                );
              })}
            </Tabs>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
