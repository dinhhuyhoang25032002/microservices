"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  SubmitValueDeviceBodyType,
  SubmitValueDeviceBody,
} from "~/types/Types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useAuthStore } from "~/store/auth/AuthStore";
export default function FormSubmit() {
  const form = useForm<SubmitValueDeviceBodyType>({
    resolver: zodResolver(SubmitValueDeviceBody),
    defaultValues: {
      temperature: undefined,
      humidy: undefined,
      light: undefined,
    },
  });
  const { user } = useAuthStore();
  const onSubmit = async (values: SubmitValueDeviceBodyType) => {
    const { _id } = user;
    const res = await (
      await fetch("", {
        method: "PATCH",
        body: JSON.stringify({
          _id,
          temperature: values.temperature,
          humidy: values.humidy,
          light: values.light,
        }),
      })
    ).json();
  };
  return (
    <Form {...form}>
      <section className="space-y-4 bg-white h-fit px-5 py-4 rounded-md">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              form.handleSubmit(onSubmit);
            }
          }}
          className="h-fit py-4 flex flex-col justify-center items-center gap-4"
        >
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nhiệt độ</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhiệt độ tối đa " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="humidy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Độ ẩm</FormLabel>
                  <FormControl>
                    <Input placeholder="Độ ẩm tối đa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="light"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ánh sáng</FormLabel>
                  <FormControl>
                    <Input placeholder="Ánh sáng tối đa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            variant="gooeyLeft"
            type="submit"
            className="bg-blue-700 w-full "
          >
            Submit
          </Button>
        </form>
      </section>
    </Form>
  );
}
