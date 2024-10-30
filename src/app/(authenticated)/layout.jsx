import React from "react";
import { AppSidebar } from "@/components/custom/Sidebar/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/primitive/sidebar";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
