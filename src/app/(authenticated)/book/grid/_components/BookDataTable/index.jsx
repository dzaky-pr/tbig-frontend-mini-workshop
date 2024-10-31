"use client";

import React from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DataTable from "@/components/custom/DataTable";
import useFetcher from "@/hooks/useFetcher";
import { getBooks } from "@/app/services/api/book/getBooks";
import { columns } from "./column";
import { Button } from "@/components/primitive/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const BookDataTable = () => {
  const { data, isLoading, error } = useFetcher({
    fetchFn: getBooks,
  });

  const { data: tableData, message, status, success } = data;
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
