"use client";
import React from "react";
import imageSale from "~/assets/image/product/sales.jpeg";
// import slug from "slug";
// import {
//   courseInforCloud,
//   // courseInforDataAnalyst,
//   // courseInforDronevsUav,
// } from "~/services/data";
import BannerPage from "~/components/custom/BannerPage";
import CourseInfor from "~/components/products/courses/CourseInfor";
import Image, { StaticImageData } from "next/image";

import PrivateRouter from "~/components/private-route";
import { useSWRPrivate } from "~/hooks/useSWRCustom";
import { useAuthStore } from "~/store/auth/AuthStore";
import MainLayout from "~/components/main-layout";
type courseListProps = {
  image: StaticImageData | string;
  name: string;
  starNumber: string;
  _id: string;
  subType: string;
  type: string;
  lessons: Array<string>;
};
export default function SearchCourse() {
  const { user } = useAuthStore();
  const { _id, courses } = user;
  const { isLoading, error, data } = useSWRPrivate("courses/active", {
    method: "POST",
    body: JSON.stringify({
      userId: _id,
      courseId: courses,
    }),
  });

  console.log("check data ", isLoading, error, data);
  const courseList: courseListProps[] = data?.payload.data;
  console.log(courseList);

  return (
    <PrivateRouter>
      <MainLayout>
        <div>
          <BannerPage
            header={"Tìm kiếm khóa học"}
            homepage={"Trang chủ"}
            name={"Tìm kiếm khóa học"}
          />
          <div className="flex px-16 gap-4 py-10 bg-[#eee] xs:px-4 xs:flex-col">
            <div className=" bg-orange-400 w-[35%] flex justify-center gap-5 rounded-2xl xs:w-full flex-col px-3 py-4">
              <div className="  flex flex-col w-full ">
                <label htmlFor="search" className="text-white">
                  Nhập thông tin để tìm kiếm khóa học
                </label>
                <input
                  type="text"
                  className="px-4 py-3 rounded"
                  id="search"
                  placeholder="ID-KIT/ID-Khóa học"
                />
              </div>
              <div className="flex items-start  justify-center  xs:pt-0 ">
                <button className="px-5 py-3 bg-red-600 rounded-sm hover:bg-[#081140] transition-colors duration-200 ease-in text-white w-full">
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </div>
            <div className="w-[65%] xs:w-full">
              <Image
                src={imageSale}
                alt="image-Sale"
                className="object-cover object-center w-full h-56 rounded-2xl"
              />
            </div>
          </div>
          <div className=" xs:px-4 xs:py-14">
            <span className="text-3xl font-semibold xs:text-2xl uppercase w-full text-center mt-10 block">
              Khóa học
            </span>
            <div className="px-14 xs:px-0">
              <div className="px-10 flex flex-col py-10 xl:px-1  xs:px-0 xs:py-5 ">
                <div className="  flex flex-col ">
                  <span className="text-xl font-semibold pb-10 uppercase text-blue-600 xs:pb-0 xs:text-center">
                    Thực hành điện toán đám mây
                  </span>
                  <div className="flex items-center w-full flex-wrap xl:justify-around xs:flex-col">
                    {courseList?.map((item, index) => {
                      return (
                        <div
                          className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                          key={index}
                        >
                          <CourseInfor
                            srcImg={item.image}
                            id={item._id}
                            nameCourse={item.name}
                            isActive={true}
                            firstLesson={item.lessons[0]}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <div className=" flex flex-col">
                  <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center xs:pb-0">
                    Thực hành phân tích dữ liệu
                  </span>
                  <div className="flex  items-center w-full flex-wrap xl:justify-around xs:flex-col">
                    {courseInforDataAnalyst.map((item, index) => {
                      return (
                        <div
                          className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                          key={index}
                        >
                          <CourseInfor
                            srcImg={item.image}
                            id={slug(item.nameCourse)}
                            isActive={true}
                            nameCourse={item.nameCourse}
                            price={item.price}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div> */}
                {/* <div className=" flex flex-col">
                  <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center xs:pb-0">
                    Thực hành Drone/UAV
                  </span>
                  <div className="flex   items-center w-full flex-wrap xl:justify-around xs:flex-col">
                    {courseInforDronevsUav.map((item, index) => {
                      return (
                        <div
                          className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                          key={index}
                        >
                          <CourseInfor
                            srcImg={item.image}
                            id={slug(item.nameCourse)}
                            isActive={true}
                            nameCourse={item.nameCourse}
                            price={item.price}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </PrivateRouter>
  );
}
