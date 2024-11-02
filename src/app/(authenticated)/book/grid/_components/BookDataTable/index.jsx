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
  const { data, isLoading, error, refetch } = useFetcher({
    fetchFn: getBooks,
  });
  const { books: tableData, message, status, success } = data;
  const dtBook = useMemo(() => tableData ?? [], [tableData]);

  const deleteBook = async (id, title) => {
    try {
      await deleteBookById(id);
      toast({
        title: "Deleted",
        description: "Success delete book with title " + title,
      });
      refetch();
    } catch (err) {
      toast({
        title: "Failed",
        variant: "destructive",
        description: err.message,
      });
    }
  };

  const table = useReactTable({
    data: dtBook,
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
