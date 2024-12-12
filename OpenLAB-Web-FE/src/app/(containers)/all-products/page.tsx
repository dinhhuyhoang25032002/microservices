import { dataSolution } from "~/services/data";
import { dataKit } from "~/services/data";
import BannerPage from "~/components/custom/BannerPage";
import SectionAllProduct from "~/components/products/all-products/SectionAllProduct";
import { IoIosSearch } from "react-icons/io";
import SectionAllCourse from "~/components/products/all-products/SectionAllCourse";
import MainLayout from "~/components/main-layout";
export default function page() {
  return (
    <MainLayout>
      <div>
        <BannerPage
          header={"Tất Cả Sản Phẩm"}
          homepage={"Trang chủ"}
          name={"Sản phẩm"}
        />
        <div className="px-24 xl:px-16 py-16 lg:px-14 sm:px-10 xs:px-5 xs:py-14">
          <div className=" flex justify-between xs:justify-center ">
            <span className="xs:hidden">Hiển thị 6 sản phẩm</span>
            <div className=" relative xs:w-[80%]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm sản phẩm"
                className="px-4 py-3 placeholder:text-base bg-[#eee] rounded xs:w-full xl:w-96"
              />
              <IoIosSearch className="absolute top-1/2 right-2 ext-base translate-y-[-50%] cursor-pointer" />
            </div>
          </div>
          <SectionAllProduct
            title={"Giải pháp/Dịch vụ"}
            data={dataSolution}
            type="APP"
          />
          <SectionAllProduct title={"Thiết bị/Kít"} data={dataKit} type="KIT" />

          <SectionAllCourse />
        </div>
      </div>
    </MainLayout>
  );
}
