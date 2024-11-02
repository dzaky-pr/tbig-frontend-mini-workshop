"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/primitive/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primitive/form";
import { Input } from "@/components/primitive/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitive/card";
import { signInSchema } from "./signInSchema";
import { signIn } from "@/services/api/auth/signIn";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm({ resolver: zodResolver(signInSchema) });

  const handleOnFormSubmit = async (value) => {
    try {
      const { email, password } = value;
      const response = await signIn(email, password);
      if (response?.token) {
        router.push("/dashboard");
        toast({
          title: "Success Sign In",
        });
      } else {
        toast({
          title: "Failed Sign In",
        });
      }
    } catch (error) {
      if (error instanceof Error)
        toast({
          title: "Failed Sign In",
          description: error.message,
        });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleOnFormSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Fill your email"
                      className="bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Fill your password"
                      className="w-full bg-background"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-6">
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
