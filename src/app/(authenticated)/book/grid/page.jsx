import React from "react";
import {
  AuthenticatedPageLayout,
  AuthenticatedPageLayoutHeader,
  AuthenticatedPageLayoutContent,
} from "@/components/custom/Layout/AuthenticatedPageLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/primitive/breadcrumb";
import BookDataTable from "./_components/BookDataTable";

const page = () => {
  return (
    <AuthenticatedPageLayout>
      <AuthenticatedPageLayoutHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Books</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AuthenticatedPageLayoutHeader>
      <AuthenticatedPageLayoutContent>
        <BookDataTable />
      </AuthenticatedPageLayoutContent>
    </AuthenticatedPageLayout>
  );
};

export default page;
