"use client";
import Slider from "react-slick";
import { settings } from "~/configs/settingSlider";
import { dataActivityInsite } from "~/services/data";
import Image from "next/image";
const setting = {
  ...settings,
  dots: false,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 969,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const SectionActivityInsite = () => {
  return (
    <div className="px-24 py-16 flex flex-col lg:px-16 xs:px-5 xs:py-14">
      <div className="text-center flex flex-col">
        <span className="font-bold  text-4xl xs:text-2xl">
          Hình ảnh tại công ty
        </span>
        <span className=" mb-16 sm:mb-10 xs:mb-8">
          Một số hình ảnh thực tế về OpenLab
        </span>
      </div>
      <Slider {...setting}>
        {dataActivityInsite.map((item, index) => {
          return (
            <div className="my-3 mx-2" key={index}>
              <div className="bg-white px-4 py-4 xs:mx-2 shadow-lg rounded-md  flex justify-around flex-co items-center w-[95%] ">
                <Image
                  src={item.image}
                  alt="image-activity-insite"
                  className="object-fill object-center w-full h-72 rounded sm:h-64 xs:h-56"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SectionActivityInsite;
