import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/primitive/tabs";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

const AuthFormTabs = (props) => {
  return (
    <Tabs defaultValue="signin" {...props}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <SignInForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthFormTabs;
