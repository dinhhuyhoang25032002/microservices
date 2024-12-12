"use client";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
// import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import { useSWRPrivate } from "~/hooks/useSWRCustom";
import { useSearchParams } from "next/navigation";
import { indexItemProps, ContentLesson } from "~/types/CustomType";
// import TitleLesson from "~/components/products/courses/private-course/section/TitleLesson";
import { useState, use } from "react";
import SectionOne from "~/components/products/courses/private-course/section/SectionOne";
import SectionTwo from "~/components/products/courses/private-course/section/SectionTwo";
import SectionFour from "~/components/products/courses/private-course/section/SectionFour";
import SectionFive from "~/components/products/courses/private-course/section/SectionFive";
import SectionLast from "~/components/products/courses/private-course/section/SectionLast";
import { BsCameraVideo } from "react-icons/bs";
import SectionThree from "~/components/products/courses/private-course/section/SectionThree";
// import { useFetchApi } from "~/hooks/useFetchApi";
// import Header from "~/components/header/Header";
import MainLayout from "~/components/main-layout";
import SectionSix from "~/components/products/courses/private-course/section/SectionSix";
import SectionSeven from "~/components/products/courses/private-course/section/SectionSeven";

type ArrLessons = {
  _id: string;
  name: string;
};
export default function CourseView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const param = use(params);
  const slug = param.slug;
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isContinue, setContinue] = useState(false);
  const {
    isLoading: isLoadingLesson,
    error: errorLesson,
    data: dataLesson,
  } = useSWRPrivate(`lessons?id=${id}`);
  const {
    isLoading: isLoadingCourse,
    error: errorCourse,
    data: dataCourse,
  } = useSWRPrivate(`courses/${slug}?isActive=${true}`);
  // const fetcher = useFetchApi(`lessons?id=${id}`);
  if (isLoadingLesson || isLoadingCourse) return <div>Loading...</div>;
  if (errorLesson || errorCourse) return <div>Error loading course data.</div>;
  const indexItem: indexItemProps[] = dataLesson?.payload?.indexItem || [];
  const nameLesson = dataLesson?.payload?.name;
  const contentCourse: ContentLesson[] = dataLesson?.payload?.content || [];
  const arrayLessons: ArrLessons[] = dataCourse?.payload.lessons;
  console.log(arrayLessons);

  // const handleContinue = () => {
  //   setContinue(true);
  //   console.log("check value scroll y outside if:", window.scrollY);
  //   if (window.scrollY > 0 && isContinue === true) {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     console.log("Vị trí cuộn sau khi cuộn lại:", window.scrollY);
  //   }
  // };

  return (
    <MainLayout coursePage={true}>
      <div className={`flex w-full  ${isOpenMenu ? "justify-end pr-4" : ""}`}>
        <div
          className={`w-[21%] h-screen z-20 bg-white overflow-y-auto transition-opacity ease-out duration-200 ${
            isOpenMenu
              ? "opacity-100 fixed top-0 left-0 "
              : " opacity-0 pointer-events-none absolute  left-0"
          }`}
        >
          <nav className="flex flex-col">
            <div className="mb-5 ">
              <Image
                src={schema5gimg}
                alt="Image-5G"
                className="border-2 border-red-500 opacity-60 bg-green-500"
              />
              <span className="uppercase font-semibold text-xl ">
                {nameLesson}
              </span>
            </div>

            <ul>
              {indexItem.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-4 hover:bg-[#eee] rounded-sm pl-3 "
                  >
                    <Link
                      href={`#${index}`}
                      className="flex items-center gap-1 font-normal text-sm "
                    >
                      <BsCameraVideo />
                      {item.nameItem}
                    </Link>
                  </li>
                );
              })}
              <li className="py-4 hover:bg-[#eee] rounded-sm pl-3 font-normal text-sm flex items-center gap-1 ">
                <BsCameraVideo /> Sơ đồ đấu nối
              </li>
              <li className="py-4 hover:bg-[#eee] rounded-sm pl-3 font-normal text-sm flex items-center gap-1 ">
                <BsCameraVideo /> Code mẫu
              </li>
              <li className="py-4 hover:bg-[#eee] rounded-sm pl-3 font-normal text-sm flex items-center gap-1 ">
                <BsCameraVideo /> Video & tài liệu
              </li>
            </ul>
            <ul>
              {arrayLessons
                ?.filter((item) => item._id !== id)
                .map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/products/courses/khoa-hoc-thuc-hanh-esp8266?id=${item._id}`}
                      className="font-semibold"
                    >
                      <li>{item.name}</li>
                    </Link>
                  );
                })}
            </ul>
          </nav>
        </div>
        <div
          className={` flex flex-col justify-center transition-all ease-out duration-200 items-center   ${
            isOpenMenu ? "w-[79%] px-4 " : "w-full px-24 z-10"
          }`}
        >
          <div className=" flex w-full bg-red-400 ">
            <button
              onClick={() => setOpenMenu(!isOpenMenu)}
              className="px-2 py-2 hover:bg-[#eee] rounded"
            >
              <MdMenuOpen className="text-2xl" />
            </button>
          </div>

          {/* <TitleLesson
          title={nameLesson}
          complete={"9"}
          percent={"1"}
          author="Matthew Lace"
        /> */}
          <div className="w-full">
            {contentCourse && contentCourse.length !== 0 ? (
              contentCourse.map((item, index) => {
                switch (index) {
                  case 0:
                    return isContinue === false ? (
                      <div id={`${index}`} key={index}>
                        <SectionOne
                          header={indexItem[0]}
                          title={item.title}
                          dataImage={item.dataImage}
                          dataPlus={item.dataPlus}
                          contentText={item.contentText}
                        />
                      </div>
                    ) : null;
                  case 1:
                    return isContinue === false ? (
                      <div id={`${index}`} key={index}>
                        <SectionTwo
                          title={item.title}
                          header={indexItem[1]}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                        />
                      </div>
                    ) : null;

                  case 2:
                    return isContinue === false ? (
                      <div
                        id={`${index}`}
                        key={index}
                        className="flex justify-center items-center flex-col"
                      >
                        <SectionThree
                          dataImage={item.dataImage}
                          header={indexItem[2]}
                          title={item.title}
                          dataList={item.dataList}
                          dataList2={item.dataList2}
                          dataMerge={item.dataMerge}
                        />
                        <div className="py-10 w-full flex justify-center items-center">
                          <Link
                            href={`#${index + 1}`}
                            className="bg-blue-500 w-1/3 py-4 text-white text-lg flex justify-center items-center"
                            onClick={() => setContinue(true)}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ) : null;
                  case 3:
                    return isContinue === true ? (
                      <div id={`${index}`} className="flex-col" key={index}>
                        <div className=" w-full flex justify-center items-center">
                          <button
                            className="bg-blue-500 w-1/3 py-4 text-white text-lg flex justify-center items-center mb-10"
                            onClick={() => setContinue(false)}
                          >
                            Back
                          </button>
                        </div>
                        <SectionFour
                          title={item.title}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                          header={indexItem[3]}
                        />
                      </div>
                    ) : null;
                  case 4:
                    return isContinue === true ? (
                      <div id={`${index}`} key={index}>
                        <SectionFive
                          header={indexItem[4]}
                          title={item.title}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                        />
                      </div>
                    ) : null;
                  case 5:
                    return isContinue === true ? (
                      <div id={`${index}`} key={index}>
                        <SectionSeven
                          header={indexItem[5]}
                          dataImage={item.dataImage}
                        />
                      </div>
                    ) : null;
                  case 6:
                    return isContinue === true ? (
                      <div id={`${index}`} key={index}>
                        <SectionSix
                          header={indexItem[5]}
                          contentText={item.contentText}
                        />
                      </div>
                    ) : null;
                  case 7:
                    return isContinue === true ? (
                      <div id={`${index}`} key={index}>
                        <SectionLast dataVideo={item.dataVideo} />
                      </div>
                    ) : null;

                  default:
                    return null;
                }
              })
            ) : (
              <></>
            )}
          </div>

          {/* <div>
          <Image src={schema5gimg} alt={"schema-5g"} />
        </div> */}
        </div>
      </div>
    </MainLayout>
  );
}
