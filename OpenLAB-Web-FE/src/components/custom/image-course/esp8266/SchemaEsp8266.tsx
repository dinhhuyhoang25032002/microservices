import React from "react";
import imageSchemaEsp8266 from "~/assets/image/product/course/ltiot/aa3ae50e028ebbd0e29f.jpg";
import { Tooltip } from "react-tooltip";
import { FaPlus } from "react-icons/fa6";
export default function SchemaEsp8266() {
  return (
    <div
      style={{ backgroundImage: `url(${imageSchemaEsp8266.src})` }}
      className="w-[750px] h-[450px]  bg-center bg-contain bg-no-repeat relative"
    >
      <div
        className="absolute text-2xl cursor-pointer text-blue-500 bottom-[22%] left-[20%] rounded-full border-2 border-blue-600"
        data-tooltip-id="my-tooltip1"
      >
        <div className="absolute rounded-full border-2 w-full h-full animate-ping border-blue-400 "></div>
        <FaPlus className="text-base text-blue-600" />
      </div>
      <Tooltip
        id="my-tooltip1"
        clickable
        openOnClick
        place="right"
        //  variant="success"
        className="px-0 py-0 opacity-100 bg-white"
        style={{
          padding: 0,
          opacity: 1,
          backgroundColor: "red",
        }}
      >
        <div className="w-96  opacity-100">
          <span>Are you absolutely sure1?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>
      <div
        className="absolute cursor-pointer text-2xl text-blue-500 top-[14%] left-[52%] shadow-xl rounded-full border-2 border-blue-600"
        data-tooltip-id="my-tooltip2"
      >
        <div className="absolute rounded-full border-2 w-full h-full animate-ping border-blue-400 "></div>

        <FaPlus className="text-base text-blue-600" />
      </div>
      <Tooltip
        id="my-tooltip2"
        clickable
        openOnClick
        place="bottom"
        variant="success"
      >
        <div>
          <span>Are you absolutely sure2?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>

      <div
        className=" absolute cursor-pointer text-2xl text-blue-500 top-[35%] right-[5%] border-2 border-blue-600 rounded-full"
        data-tooltip-id="my-tooltip3"
      >
        <div className="absolute rounded-full border-2 w-full h-full animate-ping border-blue-400 "></div>

        <FaPlus className="text-base text-blue-600" />
      </div>
      <Tooltip
        id="my-tooltip3"
        clickable
        openOnClick
        place="right"
        variant="success"
        className="bg-white"
      >
        <div>
          <span>Are you absolutely sure3?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>
    </div>
  );
}
