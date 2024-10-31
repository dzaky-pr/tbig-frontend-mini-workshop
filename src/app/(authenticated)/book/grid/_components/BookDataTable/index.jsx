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

  return <DataTable table={table} />;
};

export default BookDataTable;
