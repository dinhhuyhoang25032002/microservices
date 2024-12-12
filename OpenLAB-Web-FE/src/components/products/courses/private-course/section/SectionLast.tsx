import React from "react";
type SectionLastProps = {
  dataVideo?: string;
};
export default function SectionLast({ dataVideo }: SectionLastProps) {
  return (
    <div className=" w-full flex justify-center items-center mt-10 flex-col px-16">
      <hr className="w-full border-2 border-red-600 mb-8 " />
      <span className=" text-2xl w-full font-semibold">Video</span>
      <iframe
        width="560"
        className="rounded"
        height="315"
        src={dataVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <span className="text-2xl font-semibold py-10">The End</span>
    </div>
  );
}
