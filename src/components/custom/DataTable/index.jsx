import React from "react";

import DataTablePagination from "./DataTablePagination";
import DataTableContent from "./DataTableContent";

const DataTable = ({ table }) => {
  return (
    <>
      <DataTableContent table={table} />
      <DataTablePagination table={table} />
    </>
  );
};

export { DataTable };
