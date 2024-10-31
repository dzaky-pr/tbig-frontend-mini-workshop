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
import AddBookForm from "./_components/AddBookForm";

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
              <BreadcrumbPage>Add Book</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AuthenticatedPageLayoutHeader>
      <AuthenticatedPageLayoutContent>
        <AddBookForm />
      </AuthenticatedPageLayoutContent>
    </AuthenticatedPageLayout>
  );
};

export default page;
