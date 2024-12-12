import React from "react";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
import { FiPlusCircle } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export default function Image5G() {
  return (
    <div
      style={{ backgroundImage: `url(${schema5gimg.src})` }}
      className="w-[1100px] h-[720px] border-2 border-red-500 bg-center bg-contain bg-no-repeat relative"
    >
      <Dialog>
        <DialogTrigger>
          <div className="absolute text-2xl text-blue-500 top-[42%] left-[8%]">
            <FiPlusCircle />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <button className="absolute text-2xl text-blue-500 top-[39%] left-[42%]">
        <FiPlusCircle />
      </button>
      <button className="absolute text-2xl text-blue-500 top-[41%] right-[6%]">
        <FiPlusCircle />
      </button>
      <button className="absolute text-2xl text-blue-500 bottom-[25%] right-[20%]">
        <FiPlusCircle />
      </button>
      <button className="absolute text-2xl text-blue-500 bottom-[25%] left-[20%]">
        <FiPlusCircle />
      </button>
    </div>
  );
}
