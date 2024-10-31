"use client";
import React, { useMemo } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DataTable from "@/components/custom/DataTable";
import { columns } from "./column";

const BookDataTable = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "Computer Programming",
        synopsis:
          "Buku ini cocok bagi siapa saja yang tertarik untuk memulai pemrograman, baik untuk tujuan karier maupun hobi, dan menyediakan dasar kuat untuk mempelajari bahasa dan teknologi yang lebih canggih.",
        author: "Jojo Bizarre",
        coverImage: "https://placehold.co/270x480",
      },
    ],
    [],
  );
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTable table={table} />
    </>
  );
};

export default BookDataTable;
