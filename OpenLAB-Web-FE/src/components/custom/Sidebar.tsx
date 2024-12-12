import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  //DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import Link from "next/link";
// import CalendarCustom from "@/components/customs/CalendarCustom";
// Menu items.

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key={"Home"}>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <Home />
                    <span>{"Home"}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Block"}>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <Inbox />
                    <span>{"Block"}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Calendar"}>
                <Dialog>
                  <DialogTrigger asChild className="cursor-pointer">
                    <SidebarMenuButton asChild>
                      <div>
                        <Calendar />
                        <span>{"Calendar"}</span>
                      </div>
                    </SidebarMenuButton>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Calendar</DialogTitle>
                    {/* <CalendarCustom /> */}
                  </DialogContent>
                </Dialog>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Search"}>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <Search />
                    <span>{"Search"}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Settings"}>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <Settings />
                    <span>{"Settings"}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
