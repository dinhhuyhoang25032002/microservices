import PrivateRouter from "~/components/private-route";

export default function CourseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PrivateRouter>{children}</PrivateRouter>;
}
