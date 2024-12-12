'use client'
import { TypeAnimation } from "react-type-animation";
import { ProgressBar } from "react-loader-spinner";
import loadingRight from "~/assets/image/loading/loading0.png";
import loadingLeft from "~/assets/image/loading/loading.jpg";
import { BiAnalyse } from "react-icons/bi";
import Image from 'next/image'
const FallbackLoading = () => {
  return (
    <div className="bg-[#f2faff] w-screen h-screen px-16">
      <div className="h-full flex justify-around">
        <div className="h-full  pt-16 flex items-start pl-10">
          <Image src={loadingLeft} alt={"background-img-loading"} />
        </div>
        <div className=" flex flex-col items-center justify-center w-1/4">
          <div className=" flex items-center gap-2 text-2xl font-semibold">
            <BiAnalyse className="animate-spin" />
            <TypeAnimation
              sequence={["L", "Load", "Loadding..."]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
              className=""
            />
          </div>
          <div>
            <ProgressBar
              height="150"
              width="150"
              borderColor="#514c4c"
              barColor="#66BB6A"
              visible={true}
              ariaLabel="progress-bar-loading"
            />
          </div>
        </div>

        <div className="img-loading">
          <Image
            src={loadingRight}
            alt={"background-img-loading"}
            className="image-contain  h-full object-fill object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default FallbackLoading;
