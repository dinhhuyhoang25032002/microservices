"use client";
import Slider from "react-slick";
import { settings } from "~/configs/settingSlider";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { feedback } from "~/services/data";
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
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
type SectionFeedbackProps = {
  data: feedback[];
};
const SectionFeedback = ({ data }: SectionFeedbackProps) => {
  return (
    <div className="px-20 bg-white py-16 sm:px-10 lg:px-10 xs:px-5 xs:py-10 xl:px-16">
      <div className="flex flex-col text-center">
        <span className="text-4xl font-bold sm:text-2xl xs:text-2xl">
          Thông tin phản ánh
        </span>

        <span className=" mb-16 sm:mb-8 xs:mb-10  ">
          Các khách hàng, đối tác nói gì khi làm việc với chúng tôi
        </span>
        <div>
          <Slider {...setting}>
            {data.map((item, index) => {
              return (
                <div className="my-3 " key={index}>
                  <div className=" p-7  sm:py-4 xs:py-4  xs:px-3 w-[95%] mx-1 shadow-lg rounded-md h-72 xl:h-[298px] xs:h-56 sm:px-4 flex justify-around flex-col xs:justify-start ">
                    <div className="flex justify-between items-center">
                      <LuQuote className="text-3xl text-red-300 mb-5 sm:text-x xs:text-xl lg:text-2xl" />
                      {item.bgImg ? (
                        <div className="flex items-center">
                          <Image
                            className="w-20 h-16 object-contain object-center"
                            src={item.bgImg}
                            alt="image-bgFeedback"
                          ></Image>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <p className="text-justify pr-3 xs:pr-0 mb-2 xs:text-sm xs:text-justify">
                      {item.feedback}
                    </p>
                    <div className=" flex items-center gap-3">
                      <div className="rounded-full bg-[#eee] px-3 py-3">
                        <FaUser />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold sm:text:sm xs:text-sm ">
                          {item.name}
                        </span>
                        <span className="text-xs ">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionFeedback;
