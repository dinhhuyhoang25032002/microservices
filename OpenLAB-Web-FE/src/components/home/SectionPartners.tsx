"use client";
import Slider from "react-slick";
import { settings } from "~/configs/settingSlider";
import { dataPartners } from "~/services/data";
import Image from "next/image";
const setting = {
  ...settings,
  dots: false,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1184,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 695,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const SectionPartners = () => {
  return (
    <div
      className="body-section-partners px-44 py-14 xs:px-5 "
      data-aos="fade-up"
    >
      <div className="content-section-partners flex flex-col text-center">
        <span className="text-4xl font-bold">Đối tác</span>
        <p className="mb-16 xs:mb-10">Các đơn vị đang hợp tác cùng chúng tôi</p>

        <div className="shadow-lg rounded-lg">
          <Slider {...setting}>
            {dataPartners.map((item, index) => {
              return (
                <div className="my-4" key={index}>
                  <div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={item.image}
                        alt="partners-image"
                        className="object-contain object-center w-[93%] h-32  rounded-lg px-3 py-3 hover:scale-105 cursor-pointer"
                      />
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

export default SectionPartners;
