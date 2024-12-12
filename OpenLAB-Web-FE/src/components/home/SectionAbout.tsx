import imageAbout from "~/assets/image/about/section_about.webp";
import { ReactNode } from "react";
import { TbUsersGroup } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { MdOutlineSupportAgent } from "react-icons/md";
import Image from "next/image";
type dataAbout = {
  title: string;
  description: string;
  icon?: ReactNode;
  color: string;
};

const dataSectionAbout: dataAbout[] = [
  {
    title: "Khách hàng là trung tâm",
    description:
      "OpenLAB luôn nỗ lực làm việc để mang đến những dịch vụ chất lượng tốt nhất cho khách hàng, luôn nỗ lực lắng nghe để hiểu khách hàng và nâng cao trải nghiệm sản phẩm.",
    icon: <TbUsersGroup />,
    color: "#4d41e1",
  },
  {
    title: "Chất lượng dịch vụ",
    description:
      "OpenLAB luôn tiên phong trong việc đưa những tiến bộ mới nhất của công nghệ vào việc phát triển các dịch vụ có giá trị thực tiễn cao, phục vụ khách hàng bình dân.",
    icon: <SlBadge />,
    color: "#f14d5d",
  },
  {
    title: "Nhiệt huyết, trách nhiệm trong công việc",
    description:
      "OpenLAB luôn khắt khe trong từng chi tiết nhỏ, lấy sự hài lòng của khách hàng làm tiêu chuẩn cho các dịch vụ của mình.",
    icon: <MdOutlineSupportAgent />,
    color: "#2878eb",
  },
];

const SectionAbout = () => {
  return (
    <div className="body-section-about px-16 py-16 bg-[#f4f7fc] sm:px-24 xs:px-4 xs:py-14">
      <div className="content-section-about flex justify-between items-center gap-14 sm:flex-col-reverse xs:flex-col-reverse">
        <div
          className=" flex w-[40%] lg:w-[43%] sm:w-full xs:w-full items-center px-10 xs:px-0"
          data-aos="fade-right"
        >
          <Image
            src={imageAbout}
            alt="image-about"
            className="object-contain object-center"
          />
        </div>
        <div
          className=" flex w-1/2 items-start flex-col sm:w-full xs:w-full"
          data-aos="fade-left"
        >
          <span className="text-4xl font-semibold xs:text-2xl xs:text-center w-full">
            Tại sao lại là OpenLAB
          </span>
          <span className="font-light mb-14  w-full xs:mb-10 xs:text-justify">
            Một số lý do bạn nên hợp tác với chúng tôi
          </span>
          {dataSectionAbout.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-start mb-8  gap-6"
              >
                <div
                  className="flex justify-center items-center px-3 py-3 rounded-full text-white text-2xl"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <span className="font-semibold text-lg">{item.title}</span>
                  <p className="mt-3 text-sm xl:text-base font-light sm:text-base text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
