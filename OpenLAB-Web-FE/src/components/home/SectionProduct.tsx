"use client";
import ProductDescription from "~/components/products/ProductDescription";
import Slider from "react-slick";
import { settings } from "~/configs/settingSlider";
import { dataProduct } from "~/services/data";
import Link from "next/link";
import slug from "slug";
const setting = {
  ...settings,

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
      breakpoint: 1284,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 695,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SectionProduct = () => {
  return (
    <div
      className="body-product py-16 px-28 flex flex-col sm:px-16 xs:px-5 xs:py-10 xl:px-16"
      data-aos="fade-up"
    >
      <div className="content-top text-center">
        <span className="text-4xl font-bold leading-10 mb-2 block xs:text-2xl">
          Sản phẩm phổ biến
        </span>
        <p className="mt-2 font-normal text-base mb-8 xs:mb-4 ">
          Các sản phẩm tiêu biểu của chúng tôi
        </p>
      </div>
      <div className="content-product">
        <Slider {...setting}>
          {dataProduct.map((item, index) => {
            return (
              <div className="my-5 mx-1 " key={index}>
                <ProductDescription
                  srcImg={item.image}
                  type={item.type ? item.type : "COURSE"}
                  nameProduct={item.nameProduct}
                  description={item.description}
                  id={slug(item.nameProduct)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="mt-8 text-center">
        Bạn muốn tìm hiểu thêm về chúng tôi, về các dự án chúng tôi đang nghiên
        cứu?{" "}
        <Link href={"/all-products"}>
          <span className="font-semibold cursor-pointer">Tất cả sản phẩm</span>
        </Link>
      </div>
    </div>
  );
};

export default SectionProduct;
