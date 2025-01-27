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
import EditBookForm from "./_components/EditBookForm";

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
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/book/grid">Books</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Book</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AuthenticatedPageLayoutHeader>
      <AuthenticatedPageLayoutContent>
        <EditBookForm />
      </AuthenticatedPageLayoutContent>
    </AuthenticatedPageLayout>
  );
};

export default page;
