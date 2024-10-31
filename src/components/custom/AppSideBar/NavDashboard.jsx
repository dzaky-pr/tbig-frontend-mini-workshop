import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/primitive/sidebar";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const NavDashboard = () => {
  return (
    <SidebarMenu className="p-2">
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <a href="/dashboard">
            <LayoutDashboard />
            <span>Dashboard</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavDashboard;
