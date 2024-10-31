import React from "react";
import { Separator } from "@/components/primitive/separator";
import { SidebarTrigger } from "@/components/primitive/sidebar";
import { cn } from "@/lib/utils";

const AuthenticatedPageLayout = ({ children }) => children;

const AuthenticatedPageLayoutHeader = ({ children, className, ...props }) => (
  <header
    className={cn(
      "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
      className,
    )}
    {...props}
  >
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      {children}
    </div>
  </header>
);

const AuthenticatedPageLayoutContent = ({ children, className, ...props }) => (
  <main className={cn("p-4", className)} {...props}>
    {children}
  </main>
);

export {
  AuthenticatedPageLayout,
  AuthenticatedPageLayoutHeader,
  AuthenticatedPageLayoutContent,
};
