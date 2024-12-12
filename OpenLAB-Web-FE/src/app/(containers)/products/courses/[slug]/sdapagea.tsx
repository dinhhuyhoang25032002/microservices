"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import imageCourse from "~/assets/image/product/course/ai-ml/0e4ce4245298f5c6ac89.jpg";
import { GoDotFill } from "react-icons/go";
import { BsCameraVideo } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";
import slug from "slug";
import { useSWRPrivate } from "~/hooks/useSWRCustom";
import { useSearchParams } from "next/navigation";

const data1: string[] = [
  "Define 5G and explain its history and evolution",
  "Understand the key 5G requirements and standards",
  "Describe the fundamentals of 5G RAN and CORE",
  "Explore 5G use cases",
  "Evaluate the 5G impact on health and environment",
];

type benefitCourseProps = { _id: string; name: string };

export default function BenefitCourse({
  params,
}: {
  params: { slug: string };
}) {
  const searchParams = useSearchParams();
  const slugPage = params.slug;
  const id = searchParams.get("id");
  
  const { isLoading, error, data } = useSWRPrivate(`courses?id=${id}`);

  // Kiểm tra khi dữ liệu chưa tải hoặc gặp lỗi
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading course data.</div>;

  const nameCourse = data?.payload?.name;
  const descriptionCourse = data?.payload?.description;
  const benefitCourse: benefitCourseProps[] = data?.payload?.lessons || [];
  const firstLesson = benefitCourse.length > 0 ? benefitCourse[0] : null;

  return (
    <div className="w-screen max-w-full flex flex-col">
      <div
        className="bg-no-repeat bg-cover bg-center px-20 py-10 h-96"
        style={{ backgroundImage: `url(${imageCourse.src})` }}
      >
        <div className="flex items-center justify-center">
          <div className="w-fit flex flex-col justify-center gap-7">
            <div className="flex gap-3 items-center">
              <div className="border-2 border-white bg-blue-400 px-2 py-2 rounded-full text-white">
                ML
              </div>
              <span className="text-base text-white">Matthew Lace</span>
            </div>
            <div>
              <span className="text-3xl font-semibold text-white">
                {nameCourse || "Course Name"}
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link
                href={
                  firstLesson
                    ? `/products/courses/${slugPage}/${slug(
                        firstLesson.name
                      )}?id=${firstLesson._id}`
                    : "#"
                }
              >
                <button
                  className={`px-6 py-2 rounded-full bg-white text-sm font-semibold hover:opacity-80 ${
                    !firstLesson && "cursor-not-allowed"
                  }`}
                  disabled={!firstLesson}
                >
                  START COURSE
                </button>
              </Link>

              <button className="px-6 hover:opacity-80 py-2 text-sm text-white font-semibold rounded-full bg-transparent flex gap-1 items-center justify-center">
                DETAILS
                <FaAngleDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-semibold text-base">Description</span>
            <p>{descriptionCourse || "No description available."}</p>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base">
              By the end of this course, you will be able to
            </span>
            <ul>
              {data1.map((item, index) => (
                <li key={index} className="flex gap-1 items-center">
                  <GoDotFill />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {benefitCourse.map((item, index) => (
                <Link
                  href={`/products/courses/${slugPage}/${slug(
                    item.name
                  )}?id=${item._id}`}
                  key={index}
                >
                  <li className="flex justify-between items-center hover:bg-gray-300 py-4 px-2">
                    <div className="flex items-center gap-2">
                      <BsCameraVideo />
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    <FaRegCircle className="text-gray-400 font-semibold" />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
