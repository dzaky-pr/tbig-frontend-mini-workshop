"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetcher from "@/hooks/useFetcher";
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
import { Separator } from "@/components/primitive/separator";
import { TypographyH4 } from "@/components/primitive/typography";
import { Textarea } from "@/components/primitive/textarea";
import { getBookById } from "@/services/api/book/getBookById";
import { editBookSchema } from "./editBookSchema";

const EditBookForm = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetcher({
    fetchFn: () => getBookById(id),
  });
  const { data: book } = data;

  const form = useForm({
    resolver: zodResolver(editBookSchema),
  });
  useEffect(() => {
    form.reset(book);
  }, [form, book]);

  const editBook = (value) => {
    console.log("value", value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(editBook)} className="space-y-8">
        <TypographyH4>Edit Book Form</TypographyH4>
        <div className="grid grid-flow-row grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Insert your book title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="author"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">Author Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert your book author name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="synopsis"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">Synopsis</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Insert your book synopsis"
                    className="h-40"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator orientation="horizontal" className="my-4" />

        <div className="flex flex-row flex-wrap gap-4 sm:items-center sm:justify-center">
          <Link href={false ? "" : "/book/grid"}>
            <Button
              type="button"
              variant="destructive"
              size="lg"
              disabled={false}
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => form.reset()}
            disabled={false}
          >
            Reset
          </Button>
          <Button type="submit" size="lg" disabled={false}>
            {false && <Loader className="h-5 w-5 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditBookForm;
