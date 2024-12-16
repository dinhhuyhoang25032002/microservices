"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useState } from "react";
import ControlDevice from "~/components/dashboard/ControlDevice";
import FormSubmit from "~/components/dashboard/FormSubmit";
import { useAuthStore } from "~/store/auth/AuthStore";

export default function Page() {
  const mode = [
    { value: "handler", title: "Thủ công" },
    { value: "auto", title: "Tự động" },
  ];
  const { user } = useAuthStore();
  const { nodeId } = user;
  const [isMode, setMode] = useState("handler");
  return (
    <main className=" h-screen w-full">
      <div className="flex w-full space-y-5 flex-col">
        <div className=" h-[100px] bg-green-300 flex justify-center items-center text-xl font-semibold">
          <span>Điều khiển các thiết bị</span>
        </div>
        <div className=" bg-blue-400 px-20 py-10 flex flex-col gap-10 items-center justify-between rounded ">
          <span className="text-xl font-semibold">
            Thiết lập các thông số tối đa:
          </span>
          <div className="flex gap-10 ">
            <FormSubmit />
          </div>
        </div>

        <div className="h-[400px]  boder-2 border-gray-700 flex flex-col justify-center items-center gap-10">
          <div>
            <Select
              value={isMode}
              onValueChange={(value) => {
                setMode(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Thủ công" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {mode?.map((item, index) => (
                    <SelectItem value={item.value} key={index}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-10">
            {nodeId?.map((item, index) => {
              return (
                <div key={index}>
                  <ControlDevice isMode={isMode} nodeId={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
