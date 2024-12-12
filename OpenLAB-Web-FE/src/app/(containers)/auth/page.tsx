import MainLayout from "~/components/main-layout";
import LoginForm from "~/components/auth/FormLogin";
import CloudImage from "~/assets/image/login/0a76d34eeb704c2e1561.png";
import Chatbot from "~/assets/image/login/Chatbot_service.png";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Suspense } from "react";
import RegisterForm from "~/components/auth/FormRegister";
export default function LoginPage() {
  return (
    <MainLayout authPage={true}>
      <div className="flex bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100% w-screen h-screen max-h-screen  justify-around items-center px-16">
        <div className="w-1/5 flex h-full">
          <Image
            src={CloudImage}
            alt="Cloud-Image"
            className="w-full h-80 object-contain object-center"
          />
        </div>

        <Tabs defaultValue="login" className="w-[30%] ">
          <TabsList className=" w-full bg-[#eee] h-12">
            <TabsTrigger
              value="login"
              className="w-1/2  data-[state=active]:bg-blue-700 data-[state=active]:text-white py-2"
            >
              Đăng nhập
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="w-1/2 data-[state=active]:bg-blue-700 data-[state=active]:text-white py-2"
            >
              Đăng kí
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className=" w-full">
            <Suspense>
              <LoginForm />
            </Suspense>
          </TabsContent>
          <TabsContent value="register" className=" w-full">
            <Suspense>
              <RegisterForm />
            </Suspense>
          </TabsContent>
        </Tabs>

        <div className="w-1/4 flex items-end h-full">
          <Image
            src={Chatbot}
            priority
            alt="Chatbot-Image"
            className="w-full object-cover object-center h-80"
          />
        </div>
      </div>
    </MainLayout>
  );
}
