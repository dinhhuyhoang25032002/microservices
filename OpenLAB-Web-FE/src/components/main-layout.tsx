import React from "react";
import Header from "~/components/header/Header";
import { GrMail } from "react-icons/gr";
import Footer from "~/components/footer/Footer";
import ButtonGoToTop from "~/components/custom/ButtonGoToTop";
import NavContact from "~/components/custom/NavContact";
export default function MainLayout({
  children,
  authPage = false,
  coursePage = false,
}: Readonly<{
  children: React.ReactNode;
  authPage?: boolean;
  coursePage?: boolean;
}>) {
  return (
    <div className="w-screen max-w-full ">
      {!authPage && !coursePage && (
        <div className="xs:hidden">
          <NavContact
            contentLeft={
              <span className="flex gap-1 items-center">
                <GrMail />
                openlab.user@gmail.com
              </span>
            }
          />
        </div>
      )}

      {!authPage && (
        <header className="sticky top-0 z-20 bg-white border-b">
          <Header />
        </header>
      )}

      <div className="">{children}</div>
      {!authPage && <ButtonGoToTop />}
      {!authPage && !coursePage && <Footer />}
    </div>
  );
}
