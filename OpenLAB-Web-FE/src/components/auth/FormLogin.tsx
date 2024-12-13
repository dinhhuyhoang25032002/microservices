"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { LoginBody, LoginBodyType } from "~/types/Types";
import { handleLogin } from "~/services/Services";
import { useRouter } from "next/navigation";
// import { useGoogleLogin } from "@react-oauth/google";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useSearchParams } from "next/navigation";
import { decodeUrl } from "~/utils/encryption-url";
import { useAuthStore, UserProps } from "~/store/auth/AuthStore";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
export default function LoginForm() {
  const { setUser, setIsAuth } = useAuthStore();
  const router = useRouter();
  const query = useSearchParams();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: LoginBodyType) {
    const res = await handleLogin(values.email, values.password);
    const queryUrl = query?.get("back_to");
    if (res && res.status === 200 && res.payload) {
      const payload = res.payload as UserProps;
      console.log(payload);
      const user: UserProps = {
        fullname: payload.fullname,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        role: payload.role,
        _id: payload._id,
        email: payload.email,
        nodeId: payload.nodeId,
        accessToken: payload.accessToken,
        courses: payload.courses,
      };
      setUser(user);
      setIsAuth(true);
      if (queryUrl) {
        const back_to = decodeUrl(queryUrl);
        router.push(`${back_to}`);
      } else {
        router.replace("/");
      }
    }
  }
  const handleLoginWithGoogle = async () => {
    window.location.href = "https://localhost:3001/auth/google/login";
  };
  useEffect(() => {
    const handeAuth = async () => {
      const token = query.get("token") as string;
      if (token) {
        const validateJwt: { sub: string; email: string } = jwtDecode(token);
        const { sub, email } = validateJwt;
        try {
          const dataUser = await (
            await fetch(
              `https://localhost:3001/auth?id=${sub}&email=${email}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            )
          ).json();
          if (!dataUser) {
            alert("User not exis!");
          }
          const user: UserProps = {
            fullname: dataUser.fullname,
            address: dataUser.address,
            dateOfBirth: dataUser.dateOfBirth,
            role: dataUser.role,
            _id: dataUser._id,
            email: dataUser.email,
            image: dataUser.image,
            accessToken: token,
            nodeId: dataUser.nodeId,
            courses: dataUser.courses,
          };
          setUser(user);
          setIsAuth(true);
        } catch (error) {
          throw new Error(error as string);
        }

        router.replace("/");
      }
    };
    handeAuth();
  }, [query, router, setIsAuth, setUser]);

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
          className="space-y-4 h-fit py-4 "
        >
          <div className="flex flex-col text-center">
            <span className=" text-xl font-semibold">Đăng nhập</span>
            <span className="">Hoàn thiện thông tin để tiếp tục</span>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập mật khẩu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex justify-end items-center  w-full">
            <span className="text-xs font-medium text-end  ">
              Quên mật khẩu
            </span>
          </div>
          <Button type="submit" className="bg-blue-700 w-full">
            Đăng nhập
          </Button>
        </form>
        <aside className="space-y-4">
          <div className=" text-center  w-full">
            <span className="">Đăng nhập bằng</span>
            <div className="flex text-3xl px-12 pt-4 justify-around">
              <FaFacebook className="text-[#1877f2] text-4xl cursor-pointer" />
              <button onClick={handleLoginWithGoogle}>
                <FcGoogle className="text-4xl cursor-pointer" />
              </button>
              <FaGithub className="text-4xl cursor-pointer" />
            </div>
          </div>
          <div className="text-sm font-medium w-full text-center">
            <span>Bạn chưa có tài khoản?</span>
            <span className="font-semibold ">Đăng kí ngay</span>
          </div>
        </aside>
      </section>
    </Form>
  );
}
