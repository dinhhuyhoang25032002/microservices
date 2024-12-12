"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { encodeUrl } from "~/utils/encryption-url";
import { useAuthStore } from "~/store/auth/AuthStore";
export default function PrivateRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuth, isLoading } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.replace(`/auth?back_to=${encodeUrl(pathname)}`);
    }
  }, [isAuth, pathname, router, isLoading]);
  if (isLoading) return null;
  return isAuth ? <div>{children}</div> : null;
}
