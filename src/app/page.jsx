import React from "react";
import Image from "next/image";
import { TypographyH2, TypographyP } from "@/components/primitive/typography";
import AuthFormTabs from "./_components/AuthFormTabs";

export const metadata = {
  title: "Bookself App - Authentication",
  description: "Simple CRUD bookself app",
};

const page = () => {
  return (
    <div className="absolute inset-0 flex flex-col-reverse items-center justify-around md:w-auto md:flex-row">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-xl bg-slate-300 p-8 text-secondary-foreground sm:h-[90%] sm:w-3/4 sm:justify-start sm:p-16 lg:w-[45%]">
        <TypographyH2>Welcome Back</TypographyH2>
        <TypographyP className="mb-4">
          Please enter your credentials
        </TypographyP>
        <AuthFormTabs className="w-full max-w-96" />
      </div>
      <Image
        className="hidden h-1/2 w-[45%] min-w-60 object-contain p-0 lg:block"
        src="/signin-image.png"
        alt="sign in image"
        width={500}
        height={500}
        priority={true}
      />
    </div>
  );
};

export default page;
