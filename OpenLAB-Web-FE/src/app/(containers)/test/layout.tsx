import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/custom/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen min-w-full ">
      <SidebarProvider >
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
