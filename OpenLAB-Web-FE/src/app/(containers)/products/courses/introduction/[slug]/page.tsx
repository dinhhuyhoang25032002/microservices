"use client";
import React, { useState } from "react";
import imageCourse from "~/assets/image/product/course/ai-ml/0e4ce4245298f5c6ac89.jpg";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { useSWRPublic } from "~/hooks/useSWRCustom";
import { use } from "react";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import { ToastAction } from "~/components/ui/toast";
import { useAuthStore } from "~/store/auth/AuthStore";
import { generateQR } from "~/utils/generateQr";
import moment from "moment";
import logoBank from "~/assets/logo/logobank.png";
import "moment/locale/vi";
import { useCallback } from "react";
import { useFetchApi } from "~/hooks/useFetchApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { encodeUrl } from "~/utils/encryption-url";
moment.locale("vi");
type LessonProp = {
  _id: string;
  name: string;
  linkImage: string;
};
export default function BenefitCourse({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = use(params);
  const pathname = usePathname();
  const id = param.slug;
  const { toast } = useToast();
  const { isAuth, user } = useAuthStore();

  const [message, setMessage] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [qrcode, setQrcode] = useState<string | undefined>("");
  const [accountName, setAccountName] = useState("");
  const [description, setDescription] = useState("");
  const [expiredAt, setExpiredAt] = useState("");
  const [amount, setAmount] = useState("");
  const { _id, courses } = user;
  const { isLoading, error, data } = useSWRPublic(`courses/${id}`);
  const nameCourse = data?.name;
  const idCourse = data?._id;
  const type = data?.type;
  const descriptionCourse = data?.description;
  const benefitCourse: string[] = data?.benefit || [];
  const lessonsCourse: LessonProp[] = data?.lessons || [];
  const price = data?.price;

  console.log(pathname);
  const fetcher = useFetchApi(
    `payments/get-link?userId=${_id}&courseId=${idCourse}&type=${type}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );

  const handleGetLinkPayment = useCallback(async () => {
    alert("Getting qr code");
    const res = await fetcher();
    if (res.status !== 201 || !res.payload) {
      setMessage(
        "Đã có lỗi xảy ra trong quá trình tạo qr thanh toán, vui lòng liên hệ với chúng tôi để được giải quyết!"
      );
    }
    const qrCode = res.payload?.responseData.qrCode;
    const accountName = res.payload?.responseData.accountName;
    const checkoutUrl = res.payload?.responseData.checkoutUrl;
    const description = res.payload?.responseData.description;
    const expiredAt = res.payload?.responseData.expiredAt;
    const amount = res.payload?.responseData.amount;

    const data = await generateQR(qrCode);
    console.log(data);

    setCheckoutUrl(checkoutUrl);
    setQrcode(data);
    setAccountName(accountName);
    setDescription(description);
    setExpiredAt(expiredAt);
    setAmount(amount);
    console.log(res);
  }, [fetcher]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading course data.</div>;
  return (
    <div className="w-screen max-w-full flex flex-col">
      <div
        className="bg-no-repeat bg-cover bg-center px-20 py-10 h-96"
        style={{ backgroundImage: `url(${imageCourse.src})` }}
      ></div>

      <div className=" text-center p-6">
        <span className="text-3xl font-semibold ">
          {nameCourse ?? "Course Name"}
        </span>
      </div>

      <div className="p-16 flex item-center justify-between ">
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
              {benefitCourse.map((item, index) => (
                <li key={index} className="flex gap-1 items-center">
                  <GoDotFill />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <iframe
            width="560"
            className="rounded"
            height="315"
            src={
              "https://www.youtube.com/embed/Fe0hWZ_mjy8?si=iBwSxOvnY8b3-YWs"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex items-center  p-16 flex-wrap gap-8 bg-[#eee]">
        {lessonsCourse.map((item, index) => {
          return (
            <div
              key={index}
              className="p-3 border-2 border-gray-500 rounded space-y-2 w-[23%] h-[234px]  flex flex-col justify-center items-center bg-white cursor-pointer hover:border-blue-500 "
            >
              <Image
                src={item.linkImage}
                width={230}
                height={150}
                className="w-[230px] h-[150px]"
                alt="lessons's name of  course"
              />
              <span className="block text-center font-semibold">
                {`Bài ${index + 1}. ${item.name}`}
              </span>
            </div>
          );
        })}
      </div>
      {courses?.includes(idCourse) ? null : (
        <div className="flex justify-end px-8 py-8 bg-gray-300">
          {!qrcode ? (
            <article className=" flex gap-4 items-center flex-col border-2 rounded p-3 bg-white">
              <div className="flex flex-col space-y-3 font-semibold">
                <span className="text-center">Thông tin khóa học</span>
                <div className="flex flex-col w-full px-3 space-y-1">
                  <span>Tên: {nameCourse}</span>
                  <span>Giá: {price} VND</span>
                  <span>Số lượng: 1</span>
                </div>
                {isAuth ? (
                  <Button variant="gooeyLeft" onClick={handleGetLinkPayment}>
                    Tạo QRCode thanh toán
                  </Button>
                ) : (
                  <Button
                    variant="gooeyLeft"
                    onClick={() => {
                      toast({
                        title: "Có vẻ, bạn chưa đăng nhập",
                        description:
                          "Hãy đăng nhập để trải nghiệm những dịch vụ tuyệt vời",
                        action: (
                          <Link href={`/auth?back_to=${encodeUrl(pathname)}`}>
                            <ToastAction altText="Try again">
                              Đăng nhập ngay
                            </ToastAction>
                          </Link>
                        ),
                      });
                    }}
                  >
                    Tạo QRCode thanh toán
                  </Button>
                )}
                {message ? <span>{message}</span> : null}
              </div>
            </article>
          ) : (
            <article className=" flex justify-around w-full flex-col">
              <span className=" text-center my-5">
                Thanh toán trước:{" "}
                {moment(+expiredAt * 1000)
                  .format("dddd [ngày] D [tháng] M [năm] YYYY HH:mm:ss")
                  .charAt(0)
                  .toUpperCase() +
                  moment(+expiredAt * 1000)
                    .format("dddd [ngày] D [tháng] M [năm] YYYY HH:mm:ss")
                    .slice(1)}
              </span>
              <div className="flex justify-center gap-16 items-center">
                <div className="w-[30%] flex justify-center items-center flex-col bg-white p-4 space-y-4 rounded">
                  <div className="flex items-center gap-4">
                    <Image src={logoBank} alt="logo-banking" />
                    <span className="font-semibold">
                      Ngân hàng TMCP Quân Đội
                    </span>
                  </div>
                  <Image
                    src={qrcode}
                    alt={"qr-code"}
                    width={250}
                    className="border-2 border-pink-600 rounded"
                    height={250}
                  />
                </div>
                <div className="w-[26%] flex flex-col space-y-2 border-2 border-gray-400 p-5 rounded bg-white">
                  <span className="flex flex-col">
                    <span className="font-normal text-gray-500">
                      Chủ tài khoản:
                    </span>
                    <span className="font-semibold">{accountName}</span>
                  </span>
                  <span className="flex flex-col">
                    <span className="font-normal text-gray-500">Số tiền:</span>
                    <span className="font-semibold">
                      {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
                        " VND"}
                    </span>
                  </span>
                  <span className="flex flex-col">
                    <span className="font-normal text-gray-500">Nội dung:</span>
                    <span className="font-semibold"> {description}</span>
                  </span>
                  <div className="flex justify-between  flex-col">
                    <span className=" block ">
                      Lưu ý: Nhập chính xác số tiền{" "}
                      <span className="font-semibold ">
                        {amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}
                      </span>
                    </span>
                    <a
                      href={checkoutUrl}
                      className="hover:text-blue-500 text-end"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      )}
    </div>
  );
}
