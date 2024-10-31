import { Button } from "@/components/primitive/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitive/select";
import React from "react";

const DataTablePagination = ({ table }) => {
  const pageSize = table.getState().pagination.pageSize;
  const selectedRow = table.getFilteredSelectedRowModel().rows.length;
  const totalRow = table.getFilteredRowModel().rows.length;
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <DataTablePageSizeSelect
        pageSize={pageSize}
        setPageSize={table.setPageSize}
      />
      <DataTableRowSelected selectedRow={selectedRow} totalRow={totalRow} />
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const DataTablePageSizeSelect = ({ pageSize, setPageSize }) => {
  return (
    <div className="mr-auto flex items-center space-x-2">
      <p className="text-sm font-medium">Rows per page</p>
      <Select
        value={`${pageSize}`}
        onValueChange={(value) => {
          setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {[5, 10, 15, 20, 25].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const DataTableRowSelected = ({ selectedRow, totalRow }) => {
  return (
    <div className="flex-1 text-sm text-muted-foreground">
      {selectedRow} of {totalRow} row(s) selected.
    </div>
  );
};

export default DataTablePagination;
