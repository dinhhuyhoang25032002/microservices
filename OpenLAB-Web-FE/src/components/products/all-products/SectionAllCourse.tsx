import {
  courseInfor5G,
  courseInforAI,
  courseInforCloud,
  courseInforDataAnalyst,
  courseInforDronevsUav,
  courseInforLTN,
} from "~/services/data";
import CourseInfor from "~/components/products/courses/CourseInfor";
export default function SectionAllCourse() {
  return (
    <div className="px-16 py-10 xs:px-0 flex flex-col xl:px-0">
      <span className="text-4xl font-bold xs:text-2xl  w-full text-center block">
        Khóa học thực hành
      </span>
      <div className=" flex flex-col xl:px-1">
        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 text-blue-600 xs:text-center">
            THỰC HÀNH HỆ THỐNG IoT
          </span>
          <div className="flex  items-center w-full flex-wrap xl:justify-around xs:flex-col">
            {courseInforLTN.map((item, index) => {
              return (
                <div
                  className="flex flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center">
            Thực hành AI/ML
          </span>
          <div className="flex items-center w-full flex-wrap xl:justify-around xs:flex-col">
            {courseInforAI.map((item, index) => {
              return (
                <div
                  className="flex mt-2  justify-center items-center w-[24%] xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center">
            Thực hành mạng di động 5G
          </span>
          <div className="flex  justify-around items-center w-full flex-wrap xl:justify-around xs:flex-col">
            {courseInfor5G.map((item, index) => {
              return (
                <div
                  className="flex justify-center items-center w-[24%] xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center">
            Thực hành điện toán đám mây
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around xs:flex-col">
            {courseInforCloud.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center">
            Thực hành phân tích dữ liệu
          </span>
          <div className="flex xs:flex-col  items-center w-full flex-wrap xl:justify-around">
            {courseInforDataAnalyst.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600 xs:text-center">
            Thực hành Drone/UAV
          </span>
          <div className="flex  xs:flex-col items-center w-full flex-wrap xl:justify-around">
            {courseInforDronevsUav.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2 xs:w-full"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
