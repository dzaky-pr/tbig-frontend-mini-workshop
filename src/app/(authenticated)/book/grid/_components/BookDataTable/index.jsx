"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFetcher } from "@/hooks/useFetcher";
import { getBooks } from "@/services/api/book/getBooks";
import { deleteBookById } from "@/services/api/book/deleteBookById";
import { Button } from "@/components/primitive/button";
import { DataTable } from "@/components/custom/DataTable";
import { columns } from "./column";

const BookDataTable = () => {
  const { toast } = useToast();
  // const { data, isLoading, error, fetchFn } = useFetcher({
  //   fetchFn: getBooks,
  // });

  // const { data: tableData, message, status, success } = data;

  const deleteBook = async (id, title) => {
    try {
      const response = await deleteBookById(id);
      if (response.success == true) {
        toast({
          title: "Deleted",
          description: "Success delete book with title " + title,
        });
        // fetchFn();
        return;
      }
      toast({
        title: "Failed",
        variant: "destructive",
        description: "Failed delete book with title " + title,
      });
    } catch (err) {
      toast({
        title: "Failed",
        variant: "destructive",
        description: err.message,
      });
    }
  };

  const tableData = useMemo(() => {
    return [
      {
        id: 1,
        title: "Jojo Bizarre",
        synopsis: "Sinopsis jojo",
        author: "Kevin",
        coverImage: "",
      },
    ];
  }, []);

  const table = useReactTable({
    data: tableData ?? [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    meta: {
      fn: {
        deleteBook,
      },
    },
  });

  return (
    <div className="flex flex-col gap-y-4">
      <Button className="ml-auto" asChild={true}>
        <Link href="/book/add">
          <Plus /> Add Book
        </Link>
      </Button>
      <DataTable table={table} />
    </div>
  );
};

export default BookDataTable;
