import React from "react";
import { Breadcrumb } from "@/components/primitive/breadcrumb";
import { Separator } from "@/components/primitive/separator";
import { SidebarTrigger } from "@/components/primitive/sidebar";

const AuthenticatedPageLayout = ({ children }) => {
  return children;
};

const AuthenticatedPageLayoutHeader = ({ children }) => (
  <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      {children}
    </div>
  </header>
);

const AuthenticatedPageLayoutContent = ({ children }) => children;

export {
  AuthenticatedPageLayout,
  AuthenticatedPageLayoutHeader,
  AuthenticatedPageLayoutContent,
};
