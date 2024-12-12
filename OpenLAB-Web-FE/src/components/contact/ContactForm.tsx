"use client";

import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { ContactBody, ContactBodyType } from "~/types/Types";
import { handleContact } from "~/services/Services";
const ContactForm = () => {
  const form = useForm<ContactBodyType>({
    resolver: zodResolver(ContactBody),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      topic: "",
      content: "",
    },
  });
  const onSubmit = async (values: ContactBodyType) => {
    await handleContact(values);
  };
  return (
    <div className="px-28 flex gap-6 pb-24 xs:px-4 xs:pb-16 xs:flex-col">
      <div
        className="px-8 shadow-lg w-1/3 rounded-md flex gap-5 py-6 flex-col xs:w-full xs:px-4"
        data-aos="fade-right"
      >
        <h1 className="text-3xl font-semibold">Liên hệ OpenLAB</h1>
        <p>
          Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản
          hồi trong thời gian sớm nhất!
        </p>

        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <GrMail className="text-lg" />
          openlab.user@gmail.com
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <MdPhone className="text-lg" />
          (+84) 86 574 6698
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <IoLocation className="text-xl" />
          68B-6 Ao Sen, Hà Đông, HN
        </span>
        <hr />
      </div>
      <div
        className="flex flex-col gap-3 w-2/3 pl-8 xs:w-full xs:pl-0"
        data-aos="fade-left"
      >
        <Form {...form}>
          <section className="space-y-4 bg-white h-fit px-5  rounded-md xs:px-0">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  form.handleSubmit(onSubmit);
                }
              }}
              className="space-y-5 h-fit py-4 "
            >
              <div className="flex justify-between gap-5 ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-1/3">
                      <FormControl>
                        <Input placeholder="Tên của bạn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-1/3">
                      <FormControl className="">
                        <Input placeholder="Địa chỉ email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-1/3">
                      <FormControl>
                        <Input placeholder="Số điện thoại" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Chủ đề" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Tin nhắn của bạn"
                        {...field}
                        className="min-h-36"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="gooeyLeft"
                type="submit"
                className="w-full rounded text-lg py-4 h-12 bg-[#f83145] text-white flex justify-center items-center gap-2 hover:transition-colors hover:duration-200 hover:ease-in hover:bg-[#120f2d]"
              >
                <IoIosPaperPlane /> Gửi đi
              </Button>
            </form>
          </section>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
